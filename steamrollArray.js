/*
Flatten a nested array. You must account for varying levels of nesting.
steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
*/

function steamrollArray(arr) {
  var arrRes = [], n = 0;
  function Inner(arr) {
    for (var i = 0; i < arr.length; i++) {
      
      if (Array.isArray(arr[i])) {
        Inner(arr[i]);
      } else arrRes.push(arr[i]);
      console.log(i, arr[i], Array.isArray(arr[i]), arrRes);
    }
    return arrRes;
  }
  return Inner(arr);
}


steamrollArray([1, [2], [3, [[4]]]]);
