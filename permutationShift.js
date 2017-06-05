function permutationShift(permutation) {
  let shiftArr = [];
  let len = permutation.length
 for (let i = 0; i < len; i++) {
   shiftArr.push(permutation[i] - i);
 }
 shiftArr.sort(function(a, b) {
  return a - b;
});
 return shiftArr[len - 1] - shiftArr[0];
};
permutationShift([0, 1, 2, 3, 5, 4]);
