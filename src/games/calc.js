import run from '..';
import { cons } from 'hexlet-pairs';
import getRandomNumber from '../utils';

const gameDescription = 'What is the result of the expression?';

const operators = '+-*';

const maxRandomNumber = 40;

const getQuestionAndTrueAnswer = () => {
  const randomOperator = operators.charAt(getRandomNumber(operators.length));
  const x = getRandomNumber(maxRandomNumber);
  const y = getRandomNumber(maxRandomNumber);
  const question = `${x} ${randomOperator} ${y}`;

  let trueAnswer = 0;
  switch (randomOperator) {
    case '+':
      trueAnswer = x + y;
      break;
    case '-':
      trueAnswer = x - y;
      break;
    case '*':
      trueAnswer = x * y;
      break;
    default:
      break;
  }

  return cons(question, `${trueAnswer}`);
};

export default () => run(gameDescription, getQuestionAndTrueAnswer);
