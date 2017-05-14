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
    return factorial(n)/(factorial(n - k)*factorial(k));
  };
  let result = 0;
  for (let i = 0; i <= k1; i++) {
    console.log(Combination(i, n1) + "|" + result);
    result += Combination(i, n1)*(p**i)*((1 - p)**(n1 - i));
  }
  return result;
 };
 
 Bernulli (4, 30, 1/6);
