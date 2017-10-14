const multiMatrix = (a, b) => {
  const arows = a.length;
  const acols = a[0].length;
  const bcols = b[0].length;
  if (acols !== b.length) {
    return 'Матрицы не согласованы';
  }
  const result = [];
  const iter1 = (i) => {
    if (i >= arows) {
      return result;
      }
    result.push([]);
      const iter2 = (h) => {
        if (h >= bcols) {
          return result;
        }
        const iter3 = (sum, j) => {
          if (j >= acols)  {return sum;}
          return iter3(sum + a[i][j] * b[j][h], j + 1);
        };
        result[i][h] = iter3(0, 0);
      return iter2(h + 1);
    }
    iter2(0);
    return iter1(i + 1);
  }
  return iter1(0);
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
