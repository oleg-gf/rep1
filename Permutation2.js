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
Permutation(3,10);
