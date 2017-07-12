//Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
function convertHTML(str) {
  function replacer(match, p1, p2, p3, p4, p5, offset, string) {
    console.log(match, p1, p2, p3, p4, p5);
    switch (match) {
      case '&':
        p1 = '&amp;';
        break;
      case '<':
        p1 = '&lt;';
        break;
      case '>':
        p1 = '&gt;';
        break;
      case '\"':
        p1 = '&quot;';
        break;
      case '\'':
        p1 = '&apos;';
        break;
    }
     
  return p1;
  }
  
  str = str.replace(/(&)|(>)|(<)|(\")|(\')/gi,  replacer);
  
  return str;
}

convertHTML("Dolce\" & <>Gabba\'na");
