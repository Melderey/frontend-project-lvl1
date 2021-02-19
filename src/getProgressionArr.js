import getRandomNum from './getRandomNum.js';

const maxNum = 100;
const maxLengthProgression = 10;
const minLengthProgression = 4;

const getProgressionArr = () => {
  const randomNum = getRandomNum(maxNum);
  const randomLengthProgression = getRandomNum(
    maxLengthProgression,
    minLengthProgression,
  );
  const stepProgression = getRandomNum(maxNum);
  const arr = [randomNum];
  let newRandomNum = randomNum;

  for (let i = 0; i < randomLengthProgression; i += 1) {
    newRandomNum += stepProgression;
    arr.push(newRandomNum);
  }

  return arr;
};

export default getProgressionArr;
