import { cons, car, cdr } from 'hexlet-pairs';
import processGame from '../';
import { getRandomNumber } from '../common';

const rule = 'What is the result of the expression?';

const brainCalcGame = () => {
  const consExpression = cons(getRandomNumber(1, 11), getRandomNumber(1, 11));
  let num;
  let correctAnswer;
  switch (String(getRandomNumber(1, 3))) {
    case '1': {
      num = `${car(consExpression)} + ${cdr(consExpression)}`;
      correctAnswer = String(car(consExpression) + cdr(consExpression));
      break;
    }
    case '2': {
      num = `${car(consExpression)} - ${cdr(consExpression)}`;
      correctAnswer = String(car(consExpression) - cdr(consExpression));
      break;
    }
    case '3': {
      num = `${car(consExpression)} * ${cdr(consExpression)}`;
      correctAnswer = String(car(consExpression) * cdr(consExpression));
      break;
    }
    default: {
      console.log('error id');
    }
  }
  return { num, correctAnswer };
};

export default () => processGame(brainCalcGame, rule);
