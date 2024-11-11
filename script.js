function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;

    // Kiểm tra thông tin đăng nhập (demo)
    if (username === "user" && password === "password") {
        alert("Đăng nhập thành công!");
    } else {
        alert("Sai tài khoản hoặc mật khẩu.");
    }
}
