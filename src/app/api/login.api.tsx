// src/app/api/login.api.ts

import axios, { AxiosError } from 'axios'
import Message from '../message'

// Tạo instance axios
const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 5000,
})

//======= Check Username =======//
const checkUsername = async (username: string) => {
  try {
    const response = await api.post('/check-username', { username })
    const result = response.data
    if (!result.success) {
      throw new Error(result.message)
    }

    return true // Username exists
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(
        error?.response?.data?.message || 'Username check failed.',
      )
    } else {
      console.error(error)
      throw new Error(Message.sys.unknownError)
    }
  }
}

//======= Check Email =======//
const checkEmail = async (email: string) => {
  try {
    const response = await api.post('/check-email', { email })
    const result = response.data

    if (!result.success) {
      throw new Error(result.message)
    }

    return true // Email does not exist
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error?.response?.data?.message || 'Email check failed.')
    } else {
      console.error(error)
      throw new Error(Message.sys.unknownError)
    }
  }
}

//======= Login =======//
const loginUser = async (data: { username: string; password: string }) => {
  try {
    const response = await api.post('/login', data)
    const result = response.data
    await checkUsername(data.username)
    if (!result.success) {
      throw new Error(result.message) // Nếu không thành công, ném lỗi với thông điệp
    }

    const user = {
      id: result.data.id,
      username: result.data.username,
      email: result.data.email,
      token: result.data.token,
    }

    return user
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error?.response?.data?.message || 'Lỗi đăng nhập.') // Thêm thông điệp mặc định
    } else {
      console.error(error)
      throw new Error(Message.sys.unknownError)
    }
  }
}

//======= Register =======//
const registerUser = async (data: {
  username: string
  email: string
  password: string
  confirmPassword: string
}) => {
  try {
    await checkUsername(data.username)
    await checkEmail(data.email)
    if (data.password !== data.confirmPassword) {
      throw new Error(Message.auth.passwordNotMatch)
    }

    // Thêm giá trị mặc định cho role_id, status, và avatar
    const userPayload = {
      ...data,
      role_id: 2, // Quyền của người dùng mặc định
      status: true, // Trạng thái mặc định là active
      avatar: 'default.jpg', // Đường dẫn avatar mặc định
    }

    const response = await api.post('/register', userPayload)
    const result = response.data

    if (!result.success) {
      throw new Error(result.message)
    }

    // Nếu thành công, trả về dữ liệu người dùng đã đăng ký
    const newUser = {
      id: result.data.id,
      username: result.data.username,
      email: result.data.email,
      role_id: result.data.role_id,
      status: result.data.status,
      created_at: result.data.created_at,
    }

    return newUser
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error?.response?.data?.message)
    } else {
      console.error(error)
      throw new Error(Message.sys.unknownError)
    }
  }
}

export { checkEmail, checkUsername, loginUser, registerUser }
/*

export const loginUser = async (username: string, password: string) => {
  try {
    const response = await fetch('http://localhost:3000/api/login', {
      // Gọi tới API Next.js
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })

    if (!response.ok) {
      // Xử lý các lỗi từ server
      const errorData = await response.json()
      throw new Error(errorData.message || 'Đăng nhập thất bại')
    }

    return await response.json() // Trả về dữ liệu JSON
  } catch (error) {
    console.error('Login error:', error)
    throw error // Bỏ qua lỗi để xử lý sau
  }
}
*/

//
