import readlineSync from 'readline-sync';

const greetings = () => {
  console.log('Welcome to the Brain Games!\n');
  const userName = readlineSync.question('May I have your name? ', {
    defaultInput: 'anonymous',
  });
  console.log(`Hello, ${userName}!`);
  return userName;
};

greetings();
