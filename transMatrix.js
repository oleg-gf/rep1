const transMatrix = (a) => {
  const arows = a.length;
  const acols = a[0].length;
  const result = [];
  const iter3 = (i, j) => {
          if (j >= arows)  {return result;}
          console.log('a[',j,'][',i,'] = ', a[j][i]);
          result[i][j] = a[j][i];
          return iter3(i, j + 1);
        };
  const iter1 = (i) => {
    if (i >= acols) {
      return result;
      }
    result.push([]);
    iter3(i, 0);
    return iter1(i + 1);
  }
  return iter1(0);
};
transMatrix([[1,-3,5], [6,0,-2]]);
