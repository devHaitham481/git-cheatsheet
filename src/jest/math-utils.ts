const sum = (vals) => {
  let sum = 0;

  vals.forEach((val) => {
    sum += val;
  });

  return sum;
};

const positive = (vals) => {
  return vals.filter((x) => x > 0);
};

const negative = (vals) => {
  return vals.filter((x) => x < 0);
};

module.exports = { sum, positive, negative };
