// scripts.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get input values
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;

    // Validate the name input to ensure it contains only letters
    const namePattern = /^[A-Za-z]+$/;
    if (!namePattern.test(name)) {
        alert('Please enter a valid name with only alphabetic characters.');
        return;
    }

    // Validate the password to ensure it contains exactly 8 numeric characters
    const passwordPattern = /^\d{8}$/;
    if (!passwordPattern.test(password)) {
        alert('Please enter a valid password with exactly 8 numeric characters.');
        return;
    }

    // If inputs are valid, proceed with form submission logic
    console.log('Name:', name);
    console.log('Password:', password);
});
