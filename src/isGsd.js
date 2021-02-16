/* eslint-disable no-new-func */
// eslint-disable-next-line import/no-extraneous-dependencies
import readlineSync from 'readline-sync';
import getRandomNum from './getRandomNum.js';
import name from './name.js';
import isAnswer from './isAnswer.js';
import gsd from './gsd.js';

const maxNum = 100;

const isGsd = (numOfRaunds = 3) => {
  console.log(`Hello, ${name}!
Find the greatest common divisor of given numbers.`);

  for (let i = 0; i < numOfRaunds; i += 1) {
    const randomNum1 = getRandomNum(maxNum);
    const randomNum2 = getRandomNum(maxNum);
    const correctAnswer = gsd(randomNum1, randomNum2);

    console.log(`Question: ${randomNum1} ${randomNum2}`);
    const answer = readlineSync.question('Your answer: ');

    if (Number(answer) !== correctAnswer) {
      isAnswer(answer, correctAnswer, name);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}`);
};

export default isGsd;
