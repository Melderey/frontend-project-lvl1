const getRandomNum = (max, min = 0) => {
  const newMax = max - min;
  return Math.floor(Math.random() * Math.floor(newMax)) + min;
};

export default getRandomNum;
