const multiMatrix = (a, b) => {
  const arows = a.length;
  const acols = a[0].length;
  const bcols = b[0].length;
  if (acols !== b.length) {
    return 'Матрицы не согласованы';
  }
  const result = [];
  const pushInResult = (f, i, h) => result[i][h] = f;
  const iter3 = (sum, i, h, j) => {
          if (j >= acols)  {return sum;}
          console.log('a[',i,'][',j,'] = ', a[i][j], '| b[',j,'][',h,'] = ', b[j][h], 'sum = ',sum);
          return iter3(sum + a[i][j] * b[j][h], i, h, j + 1);
        };
  const iter2 = (i, h) => {
        if (h >= bcols) {
          return result;
        }
        pushInResult(iter3(0, i, h, 0), i, h);
      return iter2(i, h + 1);
      }
  const iter1 = (i) => {
    if (i >= arows) {
      return result;
      }
    result.push([]);
    iter2(i, 0);
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
