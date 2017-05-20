import processGame from '../';
import { getRandomNumber, getBalance } from '../math';

const rule = 'Balance the given number.';

const brainBalanceGame = () => {
  const question = getRandomNumber(10, 1000);

  const getBalanceNumber = (number) => {
    let balanceNumber = String(number);

    const max = Math.max(...balanceNumber);
    const min = Math.min(...balanceNumber);

    if (max - min > 1) {
      balanceNumber = balanceNumber.replace(max, getBalance(min, max).max);
      balanceNumber = balanceNumber.replace(min, getBalance(min, max).min);
      return getBalanceNumber(balanceNumber);
    }
    return balanceNumber;
  };

  const correctAnswer = getBalanceNumber(question);

  return { question, correctAnswer };
};

export default () => processGame(brainBalanceGame, rule);
