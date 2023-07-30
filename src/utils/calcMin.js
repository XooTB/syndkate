const calcMin = (min) => {
  const length = min.toString().length;

  switch (length) {
    case 3:
      return min - 400;
    case 4:
      return min - 1000;
    case 5:
      return min - 3000;
    case 6:
      return min - 10000;
  }
};

export default calcMin;
