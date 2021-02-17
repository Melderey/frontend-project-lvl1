/* eslint-disable no-new-func */
// eslint-disable-next-line import/no-extraneous-dependencies
import readlineSync from 'readline-sync';
import getRandomNum from '../src/getRandomNum.js';
import name from '../src/name.js';
import isAnswer from '../src/isAnswer.js';
import isPrime from '../src/isPrime.js';

const maxNum = 100;

const primeAnswer = (numOfRaunds = 3) => {
  console.log(`Hello, ${name}!
Answer "yes" if given number is prime. Otherwise answer "no".`);

  for (let i = 0; i < numOfRaunds; i += 1) {
    const randomNum = getRandomNum(maxNum);
    const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';

    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      isAnswer(answer, correctAnswer, name);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default primeAnswer;
