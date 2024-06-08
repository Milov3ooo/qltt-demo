function validateForm() {
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const errorMessage = document.getElementById('errorMessage');

    if (username === '' || email === '' || password === '' || confirmPassword === '') {
    }

    if (!validateEmail(email)) {
        errorMessage.textContent = 'Email không hợp lệ.';
        return false;
    }

    if (password !== confirmPassword) {
        errorMessage.textContent = 'Mật khẩu và xác nhận mật khẩu không khớp.';
        return false;
    }

    if (password.length < 6) {
        errorMessage.textContent = 'Mật khẩu phải có ít nhất 6 ký tự.';
        return false;
    }

    errorMessage.textContent = '';
    alert('Đăng ký thành công!');
    window.location.href = 'dangki-nhap.html'; // Chuyển hướng đến trang đăng nhập
    return false;
}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}
