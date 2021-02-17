import getRandomNum from './getRandomNum.js';

const maxNum = 100;
const maxLengthProgression = 9;
const minLengthProgression = 5;

const randomNum = getRandomNum(maxNum);
const randomLengthProgression = getRandomNum(
  maxLengthProgression,
  minLengthProgression,
);
const stepProgression = getRandomNum(maxNum);

const getProgressionArr = () => {
  const arr = [randomNum];
  let newRandomNum = randomNum;

  for (let i = 0; i <= randomLengthProgression; i += 1) {
    newRandomNum += stepProgression;
    arr.push(newRandomNum);
  }

  return arr;
};

export default getProgressionArr;
