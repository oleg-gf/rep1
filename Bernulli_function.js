const factorial = (f) => {
      let mult = f;
      if (mult === 1 || mult === 0) {
        return 1;
      }
      mult--;
      return factorial(mult)*f;
};
const Combination = (k, n) => {
   return factorial(n)/(factorial(n - k)*factorial(k));
};
const Bernulli = (k, n, p) => {
  return Combination(k, n)*(p**k)*((1 - p)**(n - k));
 };
 
Bernulli (2, 10, 0.05);
