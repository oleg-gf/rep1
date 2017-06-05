const variance = (arr) => {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    x += arr[i];
  }
  x /= arr.length;
  console.log(x);
  let result = 0;
  for (let j = 0; j < arr.length; j++) {
    result += (arr[j] - x)**2;
    console.log((arr[j] - x)**2);
  }
  return result/arr.length;
};
variance ([5,3,4,5,3]);
