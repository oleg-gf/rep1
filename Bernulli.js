const Bernulli = (k1, n1, p) => {
  const Combination = (k, n) => {
    /*Combination - функция для вычисления Сочетания*/
    const factorial = (f) => {
      let add = f;
      if (add === 1 || add === 0) {
        return 1;
      }
      add--;
      return factorial(add)*f;
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
    return Permutation(k, n)/factorial(k);
  };
  let result = 0;
  for (let i = 0; i <= k1; i++) {
    result += Combination(i, n1)*(p**i)*((1 - p)**(n1 - i));
  }
  return result;
 };
 
 Bernulli (4, 30, 1/6);
