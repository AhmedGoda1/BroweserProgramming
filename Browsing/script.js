let correctNumber = Math.floor(Math.random() * 10) + 1;
let round = 1;
let question = 1;

function checkGuess() {
    let userGuess = parseInt(document.getElementById('guessInput').value);
    let message = document.getElementById('message');

    if (userGuess === correctNumber) {
        message.innerText = "Correct! Well done.";
    } else {
        message.innerText = "Wrong! Try again.";
    }

    question++;
    if (question > 3) {
        round++;
        question = 1;
        correctNumber = Math.floor(Math.random() * 10) + 1;
    }

    if (round > 3) {
        message.innerText = "Game Over! Thanks for playing.";
        document.querySelector('button').disabled = true;
    }

    document.getElementById('round').innerText = round;
    document.getElementById('question').innerText = question;
    document.getElementById('guessInput').value = "";
}