/*
*I give you this: ['This', 'Is', 'a' 'Example');
* You give me back this: 'examplE a iS thiS'
* So. I want what I give you back in reverse order, with only the last letter of each item capitalized. 
* If the item is a single letter word and not capitilized when I give it to you, do not capitalize it.
*/
function flipper(stringArr){
  let strLastSimbol = '';
  let str = '';
  let result = '';
  for (let i = stringArr.length - 1; i >= 0; i--) {
    str = stringArr[i];
    if (stringArr[i].length > 1) {
      strLastSimbol = stringArr[i].slice(-1).toUpperCase();
      str = stringArr[i].toLowerCase().slice(0, -1) + strLastSimbol;
    }
    result += str + ' ';
  }
  return result.slice(0, -1);
}
flipper(['This', 'Is', 'A', 'Test']);
