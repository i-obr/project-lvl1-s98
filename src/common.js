export const getRandomNumber = (min, max) => Math.floor(Math.random() * max) + min;

export const findGcd = (a, b) => (b === 0 ? a : findGcd(b, (a % b)));

