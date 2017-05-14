const Permutation = (k, n) => {
  const fac = (f) => {
    let add = f;
    if (add === 1) {
      return 1;
    }
    add--;
    return fac(add)*f;
  };
  return fac(n)/fac(n - k);
};
Permutation(3,10);
