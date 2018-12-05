import run from '..';
import { cons } from 'hexlet-pairs';
import getRandomNumber from '../utils';

const gameDescription = 'Answer "yes" if number is even, otherwise answer "no".';

const isEven = number => number % 2 === 0;

const maxRandomNumber = 40;

const getQuestionAndTrueAnswer = () => {
  const question = getRandomNumber(maxRandomNumber);
  const trueAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, trueAnswer);
};

export default () => run(gameDescription, getQuestionAndTrueAnswer);
