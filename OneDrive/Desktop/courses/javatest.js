function checkAnswers() {
    
    const correctAnswers = ["Object-oriented", "JDB", "0xnf029L"];

    
    const userAnswers = [
        document.querySelector('input[name="q1"]:checked'),
        document.querySelector('input[name="q2"]:checked'),
        document.querySelector('input[name="q3"]:checked')
    ];

    let score = 0;

    
    userAnswers.forEach((answer, index) => {
        if (answer && answer.value === correctAnswers[index]) {
            score++;
        }
    });

   
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `You scored ${score} out of ${correctAnswers.length}`;
}
