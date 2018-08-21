const MAX_RANGE = 5, POSSIBLE_PRIZE = 10;

confirm('Do you want to play a game?') ? startGame() : alert('You did not become a millionaire, but can.');

function startGame(maxRange = MAX_RANGE, attemptsLeft = 3, totalPrize = 0, possiblePrize = POSSIBLE_PRIZE) {
  const randomNumber = generateRandomNumber(maxRange);

  for (let curPrize = possiblePrize; attemptsLeft > 0; curPrize = Math.floor(curPrize / 2), attemptsLeft--) {
    const userNumber = parseInt(prompt('Enter a number from 0 to ' + maxRange + '\nAttempts left: ' + attemptsLeft +
      '\nTotal prize: ' + totalPrize + '$\nPossible prize on current attempt: ' + curPrize + '$'));

    if (!isNaN(userNumber) && userNumber === randomNumber) {
      totalPrize += curPrize;

      if (confirm('Congratulation! Your prize is: ' + totalPrize + '$ \nDo you want to continue?')) {
        startGame(maxRange * 2, 3, totalPrize, possiblePrize * 3);
      }

      break;
    } else if (isNaN(userNumber) || !--attemptsLeft) {
      // user canceled prompt input OR last attempt, and user failed to guess a random number
      alert('Thank you for a game. Your prize is: ' + totalPrize + '$');

      if (confirm('Do you want to play again?')) {
        startGame();
      }

      break;
    }
  }
}

function generateRandomNumber(maxRange) {
  return Math.floor(Math.random() * ++maxRange);
}