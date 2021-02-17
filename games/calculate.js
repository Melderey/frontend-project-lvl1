/* eslint-disable no-new-func */
// eslint-disable-next-line import/no-extraneous-dependencies
import readlineSync from 'readline-sync';
import getRandomNum from '../src/getRandomNum.js';
import name from '../src/name.js';
import isAnswer from '../src/isAnswer.js';

const maxNum = 100;
const signInExpression = '+-*';

const calculate = (numOfRaunds = 3) => {
  console.log(`Hello, ${name}!
What is the result of the expression?`);

  for (let i = 0; i < numOfRaunds; i += 1) {
    const randomNum1 = getRandomNum(maxNum);
    const randomNum2 = getRandomNum(maxNum);
    const randomSign = getRandomNum(signInExpression.length);
    // eslint-disable-next-line no-useless-concat
    const correctAnswer = Function('return ' + `${randomNum1}${signInExpression[randomSign]}${randomNum2}`)(); // string conversion to math expression

    console.log(`Question: ${randomNum1} ${signInExpression[randomSign]} ${randomNum2}`);
    const answer = readlineSync.question('Your answer: ');

    if (Number(answer) !== correctAnswer) {
      isAnswer(answer, correctAnswer, name);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default calculate;
