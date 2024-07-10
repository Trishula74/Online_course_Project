document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Simple validation logic
    const cardName = document.getElementById('cardName').value;
    const cardNum = document.getElementById('cardNum').value;
    const expMonth = document.getElementById('expMonth').value;
    const expYear = document.getElementById('expYear').value;
    const cvv = document.getElementById('cvv').value;

    if (cardName === '' || cardNum === '' || expMonth === '' || expYear === '' || cvv === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Regular expression for card number validation
    const cardNumPattern = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    if (!cardNumPattern.test(cardNum)) {
        alert('Please enter a valid card number in the format 1111-2222-3333-4444.');
        return;
    }

    // Regular expression for CVV validation
    const cvvPattern = /^\d{3,4}$/;
    if (!cvvPattern.test(cvv)) {
        alert('Please enter a valid CVV.');
        return;
    }

    // If all validations pass, submit the form
    alert('Payment Successful!');
    // Here you can add the logic to actually process the payment

    this.submit();
});
