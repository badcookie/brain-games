import run from '..';
import { cons } from 'hexlet-pairs';
import getRandomNumber from '../utils';

const gameDescription = 'Answer "yes" if number is prime, otherwise answer "no".';

const startDivisor = 2;
const maxRandomNumber = 150;

const isPrime = (number) => {
  if (number === 1) {
    return false;
  }

  const border = number / 2;
  const iter = (divisor) => {
    if (divisor > border) {
      return true;
    }
    return number % divisor === 0 ? false : iter(divisor + 1);
  };

  return iter(startDivisor);
};

const getQuestionAndTrueAnswer = () => {
  const question = getRandomNumber(maxRandomNumber);
  const trueAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, trueAnswer);
};

export default () => run(gameDescription, getQuestionAndTrueAnswer);
