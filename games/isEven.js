// eslint-disable-next-line import/no-extraneous-dependencies
import readlineSync from 'readline-sync';
import getRandomNum from '../src/getRandomNum.js';
import name from '../src/name.js';
import isAnswer from '../src/isAnswer.js';

const maxNum = 100;

const isEven = (numOfRaunds = 3) => {
  console.log(`Hello, ${name}!
Answer "yes" if the number is even, otherwise answer "no".`);

  for (let i = 0; i < numOfRaunds; i += 1) {
    const randomNum = getRandomNum(maxNum);
    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== 'yes' && answer !== 'no') {
      isAnswer(answer, "yes' or 'no", name);
      return;
    }
    if (answer === 'no' && randomNum % 2 === 0) {
      isAnswer(answer, 'yes', name);
      return;
    }
    if (answer === 'yes' && randomNum % 2 !== 0) {
      isAnswer(answer, 'no', name);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}`);
};

export default isEven;
