Object.prototype.clone = function() {
//функция копирования массивов
    var newObj = (this instanceof Array) ? [] : {};
    for (i in this) {
        if (i == 'clone') 
            continue;
        if (this[i] && typeof this[i] == "object") {
            newObj[i] = this[i].clone();
        } 
        else 
            newObj[i] = this[i]
    } return newObj;
};
const multiMatrix = (a, b) => {
  if (a[0].length !== b.length) {
    return 'Матрицы не согласованы';
  }
  const result = a.clone();
  let sum = 0;
  console.log(b[0], b[0][0], b[0][1]);
  for (let i = 0; i < a.length; i++) {
    for (let h = 0; h < a[0].length; h++) {
      for (let j = 0; j < a[0].length; j++) {
        console.log('a[',i,'][',j, '] = ',a[i][j], '| b[',j,'][',h,'] = ', b[j][h])
        sum += a[i][j] * b[j][h];
      }
      result[i][h] = sum;
      sum = 0;
      console.log(a, result);
    }
  }
  return result;
};
multiMatrix([[1, 0, 2], [3, 1, 0]], [[-1, 0, 1], [5, 1, 4], [-2, 0, 1]]);
