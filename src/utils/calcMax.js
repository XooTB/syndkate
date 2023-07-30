const calcMax = (max) => {
  const length = max.toString().length;

  switch (length) {
    case 3:
      return max + 400;
    case 4:
      return max + 1000;
    case 5:
      return max + 3000;
    case 6:
      return max + 10000;
  }
};

export default calcMax;
