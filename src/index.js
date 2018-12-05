import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const greetings = () => {
  console.log('Welcome to the Brain Games!\n');
  const userName = readlineSync.question('May I have your name? ', {
    defaultInput: 'anonymous',
  });
  console.log(`Hello, ${userName}!`);
  return userName;
};

const triesCount = 3;

export default (gameDescription, generateQuestionAndTrueAnswer) => {
  const user = greetings();
  console.log(gameDescription, '\n');

  const engine = (count) => {
    if (count === 0) {
      console.log(`Congratulations, ${user}!`);
      return;
    }

    const generatedResult = generateQuestionAndTrueAnswer();
    const question = car(generatedResult);
    const trueAnswer = cdr(generatedResult);

    console.log('Question: ', question);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== trueAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`);
      console.log(`Let's try again, ${user}!`);
      return;
    }
    console.log('Correct!');
    engine(count - 1);
  };

  engine(triesCount);
};
