import run from '..';
import { cons } from 'hexlet-pairs';
import getRandomNumber from '../utils';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

const maxRandomNumber = 40;

const getQuestionAndTrueAnswer = () => {
  const x = getRandomNumber(maxRandomNumber);
  const y = getRandomNumber(maxRandomNumber);
  const question = `${x} ${y}`;
  const trueAnswer = gcd(x, y);
  return cons(question, `${trueAnswer}`);
};

export default () => run(gameDescription, getQuestionAndTrueAnswer);
