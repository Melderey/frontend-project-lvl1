const isAnswer = (userAnswer, correctAnswer, userName) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return console.log(`Let's try again, ${userName}!`);
};

export default isAnswer;
