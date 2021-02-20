const isPrime = (num) => {
  if (num === 0) {
    return false;
  }

  if (num === 1) {
    return true;
  }

  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export default isPrime;
