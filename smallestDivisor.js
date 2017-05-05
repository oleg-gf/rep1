const smallestDivisor = (n) => {
  const iter = (current, acc) => {
    if (current === 1) {
      return 1;
    }
    if (current % acc === 0) {
      return acc;
    } 
    return iter(current, acc + 1);
  };
  return iter(n, 2);
};

smallestDivisor (1);
