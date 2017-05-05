export const isPrime = (n) => {
  if (n <= 1) {
    return false;
  }
  const gd = (a, b) => {
    if ((a % b === 0)||(b > Math.floor(a/2))) {
        return Math.floor(a/b);
    }

    return gd(a, b + 1);
  };
  return (gd(n, 2) === 1);
};
