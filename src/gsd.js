const gsd = (num1, num2) => {
  const minNum = (num1 < num2) ? num1 : num2;
  const maxNum = (num1 > num2) ? num1 : num2;

  if (maxNum % minNum === 0) {
    return minNum;
  }

  const result = maxNum % minNum;
  return gsd(minNum, result);
};

export default gsd;
