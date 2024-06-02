const container = document.getElementById('container');
const registerLink = document.getElementById('register-link');
const loginLink = document.getElementById('login-link');
const btnPopup = document.getElementById('btnLogin-popup');
const closeIcon = document.getElementById('close-icon');

registerLink.onclick = function() {
    container.classList.add('active');
};

loginLink.onclick = function() {
    container.classList.remove('active');
};

btnPopup.onclick = function() {
    container.classList.add('active-popup');
};

closeIcon.onclick = function() {
    container.classList.remove('active-popup');
};
function register() {

        const username = document.getElementById('register-username').value;
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        const confirmPasswordField = document.getElementById('confirm-password');

        if (password !== confirmPassword) {
            alert('Passwords do not match! Please try again.');
            return; 
        } else {
        }

        if (localStorage.getItem(username) !== null) {
            alert('Username already exists! Please try again.');
            return;
        }

        localStorage.setItem(username, password);

        document.getElementById('register-username').value = '';
        document.getElementById('register-password').value = '';
        document.getElementById('confirm-password').value = '';

        alert('Registration successful! You can now go to Login.');
    }

    function login() {
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;
    
        if (localStorage.getItem(username) === password) {
            alert('Login successful!');
            window.location.href = 'spage.html';
        } else {
            alert('Incorrect username or password!');
        }
    

        document.getElementById('login-username').value = '';
        document.getElementById('login-password').value = '';
    }


    