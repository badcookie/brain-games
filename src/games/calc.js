import run from '..';

const gameDescription = 'What is the result of the expression?';

const maxRandomNumber = 40;
const getRandomNumber = max => Math.floor(Math.random() * max);

const getRandomExpression = () => {
  const operators = '+-*';
  const randomOperator = operators.charAt(getRandomNumber(operators.length));
  const x = getRandomNumber(maxRandomNumber);
  const y = getRandomNumber(maxRandomNumber);
  return `${x} ${randomOperator} ${y}`;
};

const getAnswer = (question) => {
  const [num1, operator, num2] = question.split(' ');
  const x = parseInt(num1, 10);
  const y = parseInt(num2, 10);
  let result = 0;
  switch (operator) {
    case '+':
      result = x + y;
      break;
    case '-':
      result = x - y;
      break;
    case '*':
      result = x * y;
      break;
    default:
      break;
  }
  return `${result}`;
};

export default () => run(gameDescription, getRandomExpression, getAnswer);
