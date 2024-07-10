document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();

   
    var formData = new FormData(event.target);

    
    var feedbackData = {};
    formData.forEach(function(value, key) {
        feedbackData[key] = value;
    });

    
    console.log(feedbackData);

  
    alert('Thank you for your feedback!');
    
    event.target.reset();
});