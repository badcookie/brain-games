import run from '..';
import { cons } from 'hexlet-pairs';
import getRandomNumber from '../utils';

const gameDescription = 'What number is missing in the progression?';

const maxRandomNumber = 8;
const progressionLength = 10;
const minPosition = 0;
const minStep = 2;

const getQuestionAndTrueAnswer = () => {
  const firstElement = getRandomNumber(maxRandomNumber);
  const step = getRandomNumber(maxRandomNumber, minStep);
  const hiddenElementPosition = getRandomNumber(progressionLength);
  const trueAnswer = firstElement + step * hiddenElementPosition;

  const getProgression = (position, currentNumber, result) => {
    if (position === progressionLength) {
      return result;
    }

    const currentElement = position === hiddenElementPosition
      ? '..' : currentNumber;
    const nextNumber = currentNumber + step;
    return getProgression(position + 1, nextNumber, `${result} ${currentElement}`);
  };

  const question = getProgression(minPosition, firstElement, '');
  return cons(question, `${trueAnswer}`);
};

export default () => run(gameDescription, getQuestionAndTrueAnswer);
