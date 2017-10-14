const multiMatrix = (a, b) => {
  if (a[0].length !== b.length) {
    return 'Матрицы не согласованы';
  }
  const result = a.clone();
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    result.push([]);
    for (let h = 0; h < b[0].length; h++) {
      for (let j = 0; j < a[0].length; j++) {
        sum += a[i][j] * b[j][h];
      }
      result[i][h] = sum;
      sum = 0;
    }
  }
  return result;
};
const expMatrix = (matrix, exp) => {
  const iter = (acc, count) => {
    if (exp === count) {
      return acc;
    }
    return iter(multiMatrix(matrix, acc), count + 1);
  }
  return iter(matrix, 1);;
};
multiMatrix([[1, 0, 2], [3, 1, 0]], [[-1, 0, 1], [5, 1, 4], [-2, 0, 1]]);
