// Simple authentication (In real applications, this should be done via server-side authentication)
const validUsername = 'user';
const validPassword = 'password';

// Handle Login
function validateLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    if (username === validUsername && password === validPassword) {
        // Save the username in sessionStorage and redirect to logout page
        sessionStorage.setItem('username', username);
        window.location.href = 'index.html'; // Redirect to logout page
    } else {
        errorMessage.textContent = 'Invalid username or password!';
    }
}
// Display logged in username on the logout page
if (window.location.pathname.includes('logout.html')) {
    const username = sessionStorage.getItem('username');
    if (username) {
        document.getElementById('username-display').textContent = username;
    } else {
        window.location.href = 'index.html'; // Redirect to login if not logged in
    }
}
// Handle Logout
function logout() {
    sessionStorage.removeItem('username');
    window.location.href = 'index.html'; // Redirect to login page after logout
}
