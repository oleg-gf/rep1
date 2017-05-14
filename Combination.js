const Combination = (k, n) => {
  const factorial = (f) => {
    let add = f;
    if (add === 1 || add === 0) {
      return 1;
    }
    add--;
    return factorial(add)*f;
  };
  return factorial(n)/(factorial(n - k)*factorial(k));
};
Combination(6,49);
