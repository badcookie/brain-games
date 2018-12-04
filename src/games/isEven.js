import readlineSync from 'readline-sync';
import greetings from '..';

const isEven = num => num % 2 === 0;
const getRandomNumber = max => Math.floor(Math.random() * max);
const maxRandomNumber = 40;
const triesCount = 3;
const user = greetings();

export default () => {
  console.log('Answer "yes" if number is even, otherwise answer "no".\n');

  const run = (count) => {
    if (count === 0) {
      console.log(`Congratulations, ${user}!`);
      return;
    }

    const question = getRandomNumber(maxRandomNumber);
    const trueAnswer = isEven(question) ? 'yes' : 'no';

    console.log('Question: ', question);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== trueAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`);
      console.log(`Let's try again, ${user}!`);
      return;
    }
    console.log('Correct!');
    run(count - 1);
  };

  run(triesCount);
};
