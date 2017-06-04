const Combination = (k, n) => {
  const factorial = (f) => {
    let add = f;
    if (add === 1 || add === 0) {
      return 1;
    }
    add--;
    return factorial(add)*f;
  };
  const Permutation = (k, n) => {
      let nk = n - k;
      const iter = (current) => {
          if (current === nk) {
            return 1;
          }
          return current * iter(current - 1);
        };
       return iter(n);

  };
  return Permutation(k, n)/factorial(k);
  
};
Combination(3,40);
