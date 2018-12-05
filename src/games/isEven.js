import run from '..';
import { cons } from 'hexlet-pairs';

const gameDescription = 'Answer "yes" if number is even, otherwise answer "no".';

const isEven = number => number % 2 === 0;

const getQuestionAndTrueAnswer = () => {
  const maxRandomNumber = 40;
  const question = Math.floor(Math.random() * maxRandomNumber);
  const trueAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, trueAnswer);
};

export default () => run(gameDescription, getQuestionAndTrueAnswer);
