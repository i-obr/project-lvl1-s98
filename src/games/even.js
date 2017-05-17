import processGame from '../';
import getRandomNumber from '../common';

const rule = 'Answer "yes" if number even otherwise answer "no". \n';

const brainEvenGame = () => {
  const condition = getRandomNumber(1, 100);
  const correctAnswer = condition % 2 === 0 ? 'yes' : 'no';
  return { condition, correctAnswer };
};

export default () => processGame(brainEvenGame, rule);
