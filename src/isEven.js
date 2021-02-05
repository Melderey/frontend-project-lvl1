// eslint-disable-next-line import/no-extraneous-dependencies
import readlineSync from 'readline-sync';

const maxNum = 100;
const getRandomNum = (max) => Math.floor(Math.random() * Math.floor(max));

const isEven = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomNum = getRandomNum(maxNum);
    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== 'yes' && answer !== 'no') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes' or 'no'."`);
      console.log(`Let's try again, ${name}`);
      return;
    }
    if (answer === 'no' && randomNum % 2 === 0) {
      console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
      console.log(`Let's try again, ${name}`);
      return;
    }
    if (answer === 'yes' && randomNum % 2 !== 0) {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      console.log(`Let's try again, ${name}`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}`);
};

export default isEven;
