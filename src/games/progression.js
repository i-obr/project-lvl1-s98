import processGame from '..';
import { getRandomNumber } from '../math';

const rule = 'What number is missing in this progression?';

const brainProgressionGame = () => {
  const lengthArr = 10;
  const startPositionArr = getRandomNumber(1, 100);
  const progressionArr = [];
  const step = getRandomNumber(1, 20);
  const emptyPosition = getRandomNumber(0, lengthArr);

  const createArr = (arr, firstPosition, stepItem) => {
    arr.push(firstPosition);
    for (let i = 1; i < lengthArr; i += 1) {
      arr.push(arr[arr.length - 1] + stepItem);
    }
    return arr;
  };

  let question = createArr(progressionArr, startPositionArr, step);
  let correctAnswer = question.splice(emptyPosition, 1, '..');

  question = question.join(' ');
  correctAnswer = correctAnswer.join(' ');

  return { question, correctAnswer };
};

export default () => processGame(brainProgressionGame, rule);
