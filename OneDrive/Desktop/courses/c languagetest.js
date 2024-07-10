function checkAnswers() {
    // Correct answers array
    const correctAnswers = ["Object-oriented", "JDB", "0xnf029L"];

    // Get user answers
    const userAnswers = [
        document.querySelector('input[name="q1"]:checked'),
        document.querySelector('input[name="q2"]:checked'),
        document.querySelector('input[name="q3"]:checked')
    ];

    // Initialize score
    let score = 0;

    // Check answers
    userAnswers.forEach((answer, index) => {
        if (answer && answer.value === correctAnswers[index]) {
            score++;
        }
    });

    // Display result
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `You scored ${score} out of ${correctAnswers.length}`;
}
