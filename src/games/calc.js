import run from '..';
import { cons } from 'hexlet-pairs';
import getRandomNumber from '../utils';

const gameDescription = 'What is the result of the expression?';

const operators = '+-*';
const actions = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const maxRandomNumber = 40;

const getQuestionAndTrueAnswer = () => {
  const randomOperator = operators.charAt(getRandomNumber(operators.length));
  const x = getRandomNumber(maxRandomNumber);
  const y = getRandomNumber(maxRandomNumber);
  const question = `${x} ${randomOperator} ${y}`;
  const trueAnswer = actions[randomOperator](x, y);
  return cons(question, `${trueAnswer}`);
};

export default () => run(gameDescription, getQuestionAndTrueAnswer);
