let userScore = 0;
let computerScore = 0;

    function Game(userChoice) {
        const choices = ['stone', 'paper', 'scissors'];
        const computerChoice = choices[Math.floor(Math.random() * 3)];

        let resultText = `You chose ${userChoice}. Computer chose ${computerChoice}. `;

        if (userChoice === computerChoice) {
            resultText += "It's a Draw!";
        } 
        else if (
            (userChoice === 'stone' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'stone') ||
            (userChoice === 'scissors' && computerChoice === 'paper')
        ) {
            userScore++;
            resultText += "You Win!";
        } 
        else {
            computerScore++;
            resultText += "Computer Wins!";
        }

        document.getElementById("result").textContent = resultText;
        document.getElementById("userScore").textContent = userScore;
        document.getElementById("computerScore").textContent = computerScore;
    }

    function resetGame() {
        userScore = 0;
        computerScore = 0;
        document.getElementById("userScore").textContent = 0;
        document.getElementById("computerScore").textContent = 0;
        document.getElementById("result").textContent = "Make your move!";
    }