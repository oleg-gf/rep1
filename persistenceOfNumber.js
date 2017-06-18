function persistence(num) {
  let counter = 0;
  let arr = [];
  while (num > 9) {
    arr = [];
    num = String(num);
    for (let i = 0; i < num.length; i++) {
      arr.push(num[i]);
    }
    console.log(num + '|' + arr.join('*'));
    num = eval(arr.join('*'));
    console.log(num);
    counter++;
  }
  return counter;
}
persistence(999);
