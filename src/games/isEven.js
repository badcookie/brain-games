import run from '..';

const gameDescription = 'Answer "yes" if number is even, otherwise answer "no".';

const getRandomNumber = () => {
  const maxRandomNumber = 40;
  return Math.floor(Math.random() * maxRandomNumber);
};

const isEven = number => number % 2 === 0;

const getAnswer = question => (isEven(question) ? 'yes' : 'no');

export default () => run(gameDescription, getRandomNumber, getAnswer);
