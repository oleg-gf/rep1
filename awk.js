/*
Реализуйте функцию, которая принимает на вход текст и возвращает массив состоящий из первых слов каждой строки текста. Пустые строчки должны игнорироваться.

Строки разделяются переводом строки
В любом месте строки может быть сколько угодно пробелов
Текст должен перебираться посимвольно (мы пишем лексер)
*/
const awk = (str) => {
  const result = [];
  const state = { st: 'space' }; // space, spaceAfterWord, word, enter
  const getState = (str) => {
    switch (str) {
      case '\n':
        state.st = 'enter';
        break;
      case ' ':
        state.st === 'word' || state.st === 'spaceAfterWord' ? state.st = 'spaceAfterWord' : state.st = 'space';
        break;
      default:
        state.st === 'spaceAfterWord' ? state.st = 'spaceAfterWord' : state.st = 'word';
        break;
      }
    return state.st;
  };
  const iter = (acc, i) => {
    let newAcc = acc;
    if (i >= str.length) {
      if (newAcc !== '') {
          result.push(newAcc);
        }
      return acc;
    }
    switch (getState(str[i])) {
      case 'space':
        newAcc = '';
        break;
      case 'enter' || 'spaceAfterWord':
        if (newAcc !== '') {
          result.push(newAcc);
        }
        newAcc = '';
        break;
      case 'word':
        newAcc += str[i];
        break;
    }
    return iter(newAcc, i + 1);
  };
  iter('', 0);
  return result;
};
const text = '  what who \n  \nhellomy\n hello   ';
awk(text);
