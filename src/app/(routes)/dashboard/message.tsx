const MESSAGE = {
  sys: {
    fetchError: 'Đã xảy ra lỗi khi lấy dữ liệu',
    loading: 'Đang tải dữ liệu...',
    unknownError: 'Lỗi không xác định',
  },
  user: {
    createSuccess: 'Tạo người dùng thành công',
    deleteSuccess: 'Xóa người dùng thành công',
    confirmDelete: 'Bạn có muốn xóa người dùng này không',
    updateSuccess: 'Cập nhật thông tin người dùng thành công',

    fetchUserError: 'Tải danh sách người dùng thất bại',
    deleteError: 'Đã xảy ra lỗi khi xóa người dùng.',
    createError: 'Tạo người dùng thất bại',
    usernameRequired: 'Vui lòng nhập tên người dùng hợp lệ (1 - 255 ký tự).',
    usernameSpecialChars: 'Vui lòng nhập tên người dùng hợp lệ.',
    emailRequired: 'Vui lòng nhập email hợp lệ.',
    emailExists: 'Email đã tồn tại, vui lòng thử email khác.',
    emailLength: 'Vui lòng nhập email hợp lệ (1 - 255 ký tự).',
    passwordRequired: 'Vui lòng nhập mật khẩu hợp lệ (1 - 255 ký tự).',
    passwordStrength:
      'Mật khẩu phải bao gồm chữ thường, in hoa, số và ký tự đặc biệt (!@#$%^&*).',
    passwordsNotMatch: 'Mật khẩu không khớp.',
    passwordRepeatLength: 'Vui lòng nhập mật khẩu hợp lệ (1-255 ký tự).',
    coverImageRequired: 'Vui lòng chọn ảnh bìa cho tài khoản.',
    coverImageFormat: 'Vui lòng chọn định dạng hợp lệ.',
    coverImageSize:
      'Ảnh tải lên có kích thước lớn hơn 5 MB, vui lòng chọn ảnh có kích thước hợp lệ.',
    coverImageUploadError: 'Tải lên ảnh bìa thất bại, vui lòng thử lại sau.',
    roleNotFound: 'Vai trò được chọn không hợp lệ.',
    statusNotFound: 'Trạng thái được chọn không hợp lệ.',
    uploadError: 'Vui lòng chọn ảnh bìa cho tài khoản.',
    formatError: 'Vui lòng chọn định dạng hợp lệ (JPG, PNG, WEBP).',
    sizeError: 'Vui lòng chọn ảnh có kích thước hợp lệ (tối đa 5MB).',
    uploadFail: 'Tải lên ảnh bìa thất bại, vui lòng thử lại sau.',
  },
}

export default MESSAGE