import run from '..';
import { cons } from 'hexlet-pairs';

const gameDescription = 'What is the result of the expression?';

const maxRandomNumber = 40;
const getRandomNumber = max => Math.floor(Math.random() * max);

const getQuestionAndTrueAnswer = () => {
  const operators = '+-*';
  const randomOperator = operators.charAt(getRandomNumber(operators.length));

  const x = getRandomNumber(maxRandomNumber);
  const y = getRandomNumber(maxRandomNumber);
  const randomExpression = `${x} ${randomOperator} ${y}`;

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

  return cons(randomExpression, `${trueAnswer}`);
};

export default () => run(gameDescription, getQuestionAndTrueAnswer);
