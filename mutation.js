/*
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
*/
function mutation(arr) {
  var re = new RegExp('[' + arr[1] + ']', 'gi');
  var re2 = new RegExp('[^' + arr[0].match(re).join('') + ']', 'gi');
    if (arr[1].match(re2)) {
      return false;
    }
  return true;
}

mutation(["hello", "hey"]);
