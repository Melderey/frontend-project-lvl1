/* eslint-disable no-new-func */
// eslint-disable-next-line import/no-extraneous-dependencies
import readlineSync from 'readline-sync';
import getRandomNum from '../src/getRandomNum.js';
import name from '../src/name.js';
import isAnswer from '../src/isAnswer.js';
import getProgressionArr from '../src/getProgressionArr.js';

const maxLengthProgression = 9;
const minLengthProgression = 5;

const progression = (numOfRaunds = 3) => {
  console.log(`Hello, ${name}!
What number is missing in the progression?`);

  for (let i = 0; i < numOfRaunds; i += 1) {
    const randomQuestionPosition = getRandomNum(
      maxLengthProgression,
      minLengthProgression,
    );
    const resultArr = getProgressionArr();
    const correctAnswer = resultArr[randomQuestionPosition];
    resultArr[randomQuestionPosition] = '..';
    const getProgressionStr = resultArr.join(' ');

    console.log(`Question: ${getProgressionStr}`);
    const answer = readlineSync.question('Your answer: ');

    if (Number(answer) !== correctAnswer) {
      isAnswer(answer, correctAnswer, name);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}`);
};

export default progression;
