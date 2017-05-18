import { cons, car, cdr } from 'hexlet-pairs';
import processGame from '../';
import { getRandomNumber } from '../common';

const rule = 'What is the result of the expression?';

const brainCalcGame = () => {
  const expression = cons(getRandomNumber(1, 11), getRandomNumber(1, 11));
  let num;
  let correctAnswer;
  switch (getRandomNumber(1, 3)) {
    case 1: {
      num = `${car(expression)} + ${cdr(expression)}`;
      correctAnswer = String(car(expression) + cdr(expression));
      break;
    }
    case 2: {
      num = `${car(expression)} - ${cdr(expression)}`;
      correctAnswer = String(car(expression) - cdr(expression));
      break;
    }
    case 3: {
      num = `${car(expression)} * ${cdr(expression)}`;
      correctAnswer = String(car(expression) * cdr(expression));
      break;
    }
    default: {
      console.log('error id');
    }
  }
  return { num, correctAnswer };
};

export default () => processGame(brainCalcGame, rule);
