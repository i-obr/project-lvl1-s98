import processGame from '..';
import { getRandomNumber, isPrime } from '../math';

const rule = 'Answer "yes" if number prime otherwise answer "no".';

const brainPrimeGame = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => processGame(brainPrimeGame, rule);
