/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/
function rot13(str) { // LBH QVQ VG!
  var code = 0, result = '';
  for (i=0; i< str.length; i++) {
    console.log(str.charCodeAt(i));
    code = str.charCodeAt(i);
    if (code > 64 && code < 91) {
      code += 13;
      if (code > 90) {
        code -= 26;
      }
    }
    result += String.fromCharCode(code);
  }
  return result;
}

rot13("LBH QVQ VG!");
