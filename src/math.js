export const getRandomNumber = (min, max) => Math.floor(Math.random() * max) + min;

export const getGcd = (a, b) => (b === 0 ? a : getGcd(b, (a % b)));

export const getBalance = (min, max) => {
  if (max - min > 1) {
    return getBalance(min + 1, max - 1);
  }
  return { min, max };
};

export const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  let i = 2;

  while (i <= number / 2) {
    if (number % i === 0) {
      return false;
    }
    i += 1;
  }

  return true;
};
