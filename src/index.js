import readlineSync from 'readline-sync';

const repeatCount = 3;

const processGame = (game, rule) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${rule} \n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}! \n`);

  const repeatGame = (count) => {
    const gameState = game();
    console.log(`Question: ${gameState.question}`);
    const answer = readlineSync.question('Your answer: ');

    if (gameState.correctAnswer === answer.toLowerCase()) {
      console.log('Correct!');
      if (count === 1) {
        console.log(`Congratulations, ${userName}!`);
        return;
      }
      repeatGame(count - 1);
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${gameState.correctAnswer}'. Let's try again, ${userName}!`);
    }
  };

  return repeatGame(repeatCount);
};

export default processGame;
