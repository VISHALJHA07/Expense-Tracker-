// Ensure the script runs after DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const users = JSON.parse(localStorage.getItem('users')) || {};
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const registerLink = document.getElementById('register-link');
    const loginLink = document.getElementById('login-link');

    // Switch to Register Form
    registerLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    });

    // Switch to Login Form
    loginLink.addEventListener('click', (e) => {
        e.preventDefault();
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
    });

    // Handle Registration
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('new-username').value.trim();
        const password = document.getElementById('new-password').value.trim();

        if (users[username]) {
            alert('Username already exists!');
        } else {
            users[username] = { password, transactions: [] };
            localStorage.setItem('users', JSON.stringify(users));
            alert('Registration successful! You can now log in.');
            registerForm.reset();
            loginForm.style.display = 'block';
            registerForm.style.display = 'none';
        }
    });

    // Handle Login
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        if (users[username] && users[username].password === password) {
            localStorage.setItem('loggedInUser', username);
            alert('Login successful! Redirecting to your dashboard...');
            window.location.href = 'index.html'; // Redirect to the main app
        } else {
            alert('Invalid username or password!');
        }
    });
});
