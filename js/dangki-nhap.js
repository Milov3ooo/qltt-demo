
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    // Simple validation for demonstration purposes
    if (email === 'test@gmail.com' && password === 'pass1234') {
        // Đăng nhập thành công, chuyển hướng đến trang người dùng thông thường
        window.location.href = 'chinh2.html'; // Thay 'chinh2.html' bằng đường dẫn tới trang chủ của bạn
    } else if (email === 'admin@gmail.com' && password === 'pass1234') {
        // Đăng nhập thành công, chuyển hướng đến trang quản trị viên
        window.location.href = 'admin.html'; // Thay 'admin.html' bằng đường dẫn tới trang quản trị viên của bạn
    } else {
        alert('Invalid email or password. Please try again.');
    }
});