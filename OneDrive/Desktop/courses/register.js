function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (name.trim() == '' || email.trim() == '' || password.trim() == '') {
        alert('Please fill in all fields');
        return false;
    }

    // Additional validation can be added here, e.g., checking email format

    // If all validations pass, you can submit the form or perform other actions
    alert('Registration successful');
    return true;
}