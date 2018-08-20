let wannaPlay = confirm('Do you want to play a game?');
let userNum;
let prize = 0;
let gameNum = 0;
let min = 0;
let max = 5;
const maxNum = 6;

let numbers = { one: 1, two: 2, three: 3, ten: 10, five: 5 };

let one = 10;
let two = 5;
let three = 2;

if (wannaPlay === true) {
  game();
} else {
  alert('You did not become a millionaire, but can.');
}

function game() {
  gameNum++;
  if (gameNum >= 2) {
    one *= 3;
    two *= 3;
    three *= 3;
  }
  let tries = 0;
  let number = Math.floor(Math.random() * maxNum);
  console.log(number);

  while (userNum !== number && tries < 3) {
    tries++;

    let attemptAmount = 0;
    if (tries === numbers.one) {
      attemptAmount = one;
    } else if (tries === numbers.two) {
      attemptAmount = two;
    } else if (tries === numbers.three) {
      attemptAmount = three;
    }

    let result1 = 'Enter a number from ' + min * gameNum + ' to ' + max * gameNum + '\n';
    let result2 = 'Attempts left: ' + (4 - tries) + '\n';
    let result3 = 'Total prize: ' + prize + '$' + '\n';
    let result4 = 'Possible prize on current attempt: ' + attemptAmount + '$';


    userNum = +prompt(result1 + result2 + result3 + result4, '');
  }

  if (tries === numbers.one && userNum === number) {
    prize += one;
  } else if (tries === numbers.two && userNum === number) {
    prize += two;
  } else if (tries === numbers.three && userNum === number) {
    prize += three;
  }

  let playAgain;
  let playContinue;
  if (userNum !== number) {
    alert('Thank you for a game. Your prize is: ' + prize + '$');
    playAgain = confirm('Are you wants to play again?', '');

    if (playAgain === true) {
      gameNum = 0;
      prize = 0;
      min = 0;
      max = numbers.five;
      one = numbers.ten;
      two = numbers.five;
      three = 2;
      game();
    }
  } else {
    playContinue = confirm('Congratulation! Your prize is: ' + prize + '$' + '. Do you want to continue?');

    if (playContinue === true) {
      game();
    } else {
      alert('Thank you for a game. Your prize is: ' + prize + '$');
      playAgain = confirm('Are you wants to play again?', '');

      if (playAgain === true) {
        gameNum = 0;
        prize = 0;
        min = 0;
        max = numbers.five;
        one = numbers.ten;
        two = numbers.five;
        three = 2;
        game();
      }
    }
  }
}

