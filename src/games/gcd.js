import { cons, car, cdr } from 'hexlet-pairs';
import processGame from '..';
import { getRandomNumber, getGcd } from '../math';

const rule = 'Find the greatest common divisor of given numbers.';

const brainGcdGame = () => {
  const consExpression = cons(getRandomNumber(1, 51), getRandomNumber(1, 51));
  const question = `${car(consExpression)} ${cdr(consExpression)}`;
  const correctAnswer = String(getGcd(car(consExpression), cdr(consExpression)));
  return { question, correctAnswer };
};

export default () => processGame(brainGcdGame, rule);
