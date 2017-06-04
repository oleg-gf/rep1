const factorial = (f) => {
      let mult = f;
      if (mult === 1 || mult === 0) {
        return 1;
      }
      mult--;
      return factorial(mult)*f;
};
const Permutation = (k, n) => {
       /*Permutation - функция для вычисления Размещения*/
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
  /*Combination - функция для вычисления Сочетания*/
   return Permutation(k, n)/factorial(k);
};
const Bernulli = (k, n, p) => {
  /*функция для вычисления формулы Бернулли*/
  return Combination(k, n)*(p**k)*((1 - p)**(n - k));
 };
const Probability = (k, n, p) => {
  /*функция для вычисления суммы вероятностей по формуле Бернулли*/
  let result = 0;
  for (let i = 0; i <= k; i++) {
    
    result += Bernulli(i, n, p);
  }
  return result;
 };
Probability (4, 30, 1/6);
