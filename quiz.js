function checkAnswer() {
    let correctAnswer = "4";

    const userAnswer = document.querySelector('input[name="quiz"]:checked');
    const feedback = document.getElementById("feedback");

    if (userAnswer.value === correctAnswer) {
        feedback.textContent = "Correct! Well done."
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
    
}

const button = document.getElementById("submit-answer");
button.addEventListener("click", checkAnswer);
