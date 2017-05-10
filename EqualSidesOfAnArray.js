function findEvenIndex(arr)
{
  let sum1 = 0, sum2 = 0, num = 0;
  for (i = 0; i < arr.length; i++) {
    sum1 += arr[i];
  }
  for (i = 0; i < arr.length; i++) {
    sum2 += arr[i];
    if (sum2 > sum1/2) {
      num = i;
      sum2 = 0;
    }
  }
  return sum2 === (sum1 - sum2 - arr[num]) ? num: -1;
}
