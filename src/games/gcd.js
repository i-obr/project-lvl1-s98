import { cons, car, cdr } from 'hexlet-pairs';
import processGame from '../';
import { getRandomNumber, findGcd } from '../common';

const rule = 'Find the greatest common divisor of given numbers.';

const brainGcdGame = () => {
  const consExpression = cons(getRandomNumber(1, 51), getRandomNumber(1, 51));
  const num = `${car(consExpression)} ${cdr(consExpression)}`;
  const correctAnswer = String(findGcd(car(consExpression), cdr(consExpression)));
  return { num, correctAnswer };
};

export default () => processGame(brainGcdGame, rule);
