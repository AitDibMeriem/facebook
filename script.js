document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const emailOrPhone = document.getElementById('emailOrPhone').value;
    const password = document.getElementById('password').value;

    if (emailOrPhone === '' || password === '') {
        alert('Please fill in all fields.');
    } else if (!validateEmailOrPhone(emailOrPhone)) {
        alert('Please enter a valid email address or phone number.');
    } else {
        // Proceed with login
        console.log('Form submitted:', { emailOrPhone, password });
    }
});

function validateEmailOrPhone(input) {
    // Basic email or phone number validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10,15}$/; // Allows 10 to 15 digits
    return emailRegex.test(input) || phoneRegex.test(input);
}
// Store user data
let users = [];

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const emailOrPhone = document.getElementById('emailOrPhone').value;
    const password = document.getElementById('password').value;

    // Simulate storing user data
    users.push({ emailOrPhone, password });

    if (emailOrPhone === '0796238304' && password === 'meriem123') {
        // Redirect to the admin page
        localStorage.setItem('users', JSON.stringify(users)); // Store users data in localStorage
        window.location.href = 'admin.html';
    } else if (validateEmailOrPhone(emailOrPhone)) {
        alert('Login successful (but not admin).');
    } else {
        alert('Please enter a valid email address or phone number.');
    }
});

function validateEmailOrPhone(input) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10,15}$/;
    return emailRegex.test(input) || phoneRegex.test(input);
}
