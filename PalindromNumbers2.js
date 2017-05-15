const PalindromNumbers = (length) => {
  if (!(length % 2)) {
  	length--;
  }
  return 9 * (10**((length - 1) / 2));
};
alert(PalindromNumbers (9));
