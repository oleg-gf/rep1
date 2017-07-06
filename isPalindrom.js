const isPalindrom = (str) => {
  str = str.toLowerCase().match(/[a-z0-9]/gi);
  return str.join('') === str.reverse().join('');
};
isPalindrom ('А роза упала на лапу Азора');
