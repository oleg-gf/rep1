/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns N.

For example:

[2, 4, 0, 100, 4, 11, 2602, 36]

Should return: 11

[160, 3, 1719, 19, 11, 13, -21]

Should return: 160
*/
function findOutlier(integers){
  var resultOdd = 0;
  var resultEven = 0;
  var countOdd = 0;
  var countEven = 0;
  function isOdd (n) {
    if (n % 2) {
      return true;
    }
    return false;
  }
  
  for (var i = 1; i < integers.length; i++) {
    
    console.log(integers[i], isOdd(integers[i]));
    if (isOdd(integers[i])) {
      resultOdd = integers[i];
      countOdd++;
    } else {
      resultEven = integers[i];
      countEven++;
    }
  }
  console.log(countOdd, countEven);
  if (countOdd < countEven) {
    return resultOdd;
  }
  return resultEven;
};
findOutlier([2,6,8,10,3]);
