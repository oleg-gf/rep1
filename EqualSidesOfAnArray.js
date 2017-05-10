function findEvenIndex(arr)
{
  let sum1 = 0, sum2 = 0, num = 0;
  for (i = 0; i < arr.length; i++) {
    sum1 += arr[i];
  }
  for (i = 0; i < arr.length; i++) {
    if (sum2 === (sum1 - sum2 - arr[i])) {
      num = i;
      sum2 = 0;
      break;
    }
    sum2 += arr[i];
  }
  for (i = num + 1; i < arr.length; i++) {
    sum2 += arr[i];
  }
  return sum2 === (sum1 - sum2 - arr[num]) ? num: -1;
}
