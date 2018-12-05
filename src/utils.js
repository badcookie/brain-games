export const getRandomNumber = (max, min = 0) => (
  Math.floor(Math.random() * (max - min)) + min
);

export const maxRandomNumber = 40;
