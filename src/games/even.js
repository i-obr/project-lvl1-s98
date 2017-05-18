import processGame from '../';
import { getRandomNumber } from '../math';

const rule = 'Answer "yes" if number even otherwise answer "no".';

const brainEvenGame = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => processGame(brainEvenGame, rule);
