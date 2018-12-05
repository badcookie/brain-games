import run from '..';
import { cons } from 'hexlet-pairs';
import getRandomNumber from '../utils';

const gameDescription = 'What number is missing in the progression?';

const maxRandomNumber = 8;
const progressionLength = 10;
const minPosition = 1;
const minStep = 2;

const getQuestionAndTrueAnswer = () => {
  const firstNumberInProgression = getRandomNumber(maxRandomNumber);
  const step = getRandomNumber(maxRandomNumber, minStep);
  const randomEmptyPosition = getRandomNumber(maxRandomNumber, minPosition);
  let trueAnswer = 0;

  const getProgression = (position, previousNumber, result) => {
    if (position === progressionLength) {
      return result;
    }

    const newNumber = previousNumber + step;
    if (position === randomEmptyPosition) {
      trueAnswer = newNumber;
      return getProgression(position + 1, newNumber, `${result} ..`);
    }
    return getProgression(position + 1, newNumber, `${result} ${newNumber}`);
  };

  const question = getProgression(
    minPosition, firstNumberInProgression, `${firstNumberInProgression}`,
  );
  return cons(question, `${trueAnswer}`);
};

export default () => run(gameDescription, getQuestionAndTrueAnswer);
