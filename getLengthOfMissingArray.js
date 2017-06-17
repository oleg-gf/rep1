function getLengthOfMissingArray(arrayOfArrays) {
  if (arrayOfArrays.length > 0) {
    let arr2 = [];
    for (i = 0; i < arrayOfArrays.length; i++) {
      arr2.push(arrayOfArrays[i].length);
    }
    
    for (i = 1; i <= arrayOfArrays.length; i++) {
      
      if (!arr2.includes(i)) {
        return i;
      }
    }
    
  }
  return 0;
}
getLengthOfMissingArray([ [ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] );
