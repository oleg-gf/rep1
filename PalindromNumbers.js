const PalindromNumbers = (length) => {
  let arr = [1];
  while (arr.length < length) {
    arr.push(0);
  }
  let i = Number(arr.join(''));
  arr.push(0);
  let count = 0, bool = 0;
  for (; i < Number(arr.join('')); i++) {
    for (let j = 0; j < Math.floor(length/2); j++) {
       
       if (String(i).charAt(j) === String(i).charAt(length - 1 - j)) {
         bool ++;
       } else {break;}
       console.log(i + "|" + String(i).charAt(j) + "|" + String(i).charAt(length - 1 - j) + "|" + bool);
    }
    if (bool === Math.floor(length/2)) {
      count++;
    }
    bool = 0;
  }
  console.log(Math.floor(length/2));
  return count;
};
PalindromNumbers (5);
