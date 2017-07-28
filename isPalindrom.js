const isPalindrom = (str) => {
  str = str.toLowerCase().match(/[a-zа-я0-9]/gi);
  return str.join('') === str.reverse().join('');
};
isPalindrom ('А роза упала на лапу Азора');
