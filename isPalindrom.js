const isPalindrom = (str) => {
  str = str.toLowerCase().match(/\S/gi);
  return str.join('') === str.reverse().join('');
};
isPalindrom ('А роза упала на лапу Азора');
