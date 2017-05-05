const fac = (n) => {
  arr = [];
  while (n > 1) {
    arr.push(n);
    n--;
  }
  return eval(arr.join('*'));
};

fac (30);
