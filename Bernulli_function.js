const factorial = (f) => {
      let mult = f;
      if (mult === 1 || mult === 0) {
        return 1;
      }
      mult--;
      return factorial(mult)*f;
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
const Combination = (k, n) => {
   return Permutation(k, n)/factorial(k);
};
const Bernulli = (k, n, p) => {
  return Combination(k, n)*(p**k)*((1 - p)**(n - k));
 };
 
Bernulli (2, 10, 0.05);
