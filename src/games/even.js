import processGame from '../';
import getRandomNumber from '../common';

const rule = 'Answer "yes" if number even otherwise answer "no".';

const brainEvenGame = () => {
  const num = getRandomNumber(1, 100);
  const correctAnswer = num % 2 === 0 ? 'yes' : 'no';
  return { num, correctAnswer };
};

export default () => processGame(brainEvenGame, rule);
