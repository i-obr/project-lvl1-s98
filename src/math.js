export const getRandomNumber = (min, max) => Math.floor(Math.random() * max) + min;

export const getGcd = (a, b) => (b === 0 ? a : getGcd(b, (a % b)));
