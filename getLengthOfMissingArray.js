function getLengthOfMissingArray(arrayOfArrays) {
  if (arrayOfArrays == null) {
        return 0;
      }
  if (arrayOfArrays.length > 0) {
    let arr2 = [];
    for (let i = 0; i < arrayOfArrays.length; i++) {
      if ( arrayOfArrays[i] == null) {
        return 0;
      }
      if (arrayOfArrays[i].length === 0 ) {
        return 0;
      }
      arr2.push(arrayOfArrays[i].length);
    }
    arr2.sort(function(a, b) {
      return a - b;
    });
    for (i = arr2[0]; i <= (arr2[0] + arr2.length); i++) {
      
      if (!arr2.includes(i)) {
        return i;
      }
    }
    
  }
  return 0;
}
getLengthOfMissingArray([ [ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] );
