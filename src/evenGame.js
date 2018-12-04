import readlineSync from 'readline-sync';

const getRandomNumber = max => Math.floor(Math.random() * max);
const maxRandomNumber = 40;
const triesCount = 3;

export default (user) => {
  console.log('Answer "yes" if number is even, otherwise answer "no".\n');
  const isEven = num => num % 2 === 0;

  const run = (count) => {
    if (count === 0) {
      console.log(`Congratulations, ${user}!`);
      return;
    }

    const randomNumber = getRandomNumber(maxRandomNumber);
    const trueAnswer = isEven(randomNumber) ? 'yes' : 'no';

    console.log('Question: ', randomNumber);
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
