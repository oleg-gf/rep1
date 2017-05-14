const Permutation = (k, n) => {
  let mult = 1;
    for (let i = n; i > n - k; i--) {
      mult *= i;
    }
    return mult;
};
Permutation(3,10);
