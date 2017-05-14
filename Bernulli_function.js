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
  
  return Combination(k1, n1)*(p**k1)*((1 - p)**(n1 - k1));
 };
 
 Bernulli (2, 10, 0.05);
