export const getRandomNumber = (min, max) => Math.floor(Math.random() * max) + min;

export const getGcd = (a, b) => (b === 0 ? a : getGcd(b, (a % b)));

export const getBalance = (min, max) => {
  if (max - min > 1) {
    return getBalance(min + 1, max - 1);
  }
  return { min, max };
};
