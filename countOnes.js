/*
Given two numbers: 'left' and 'right' (1 <= 'left' <= 'right' <= 1 000 000 000) return sum of all '1' occurencies in binary representations of numbers between 'left' and 'right' (including both)

Example:
countOnes 4 7 should return 8, because:
4(dec) = 100(bin), which adds 1 to the result.
5(dec) = 101(bin), which adds 2 to the result.
6(dec) = 110(bin), which adds 2 to the result.
7(dec) = 111(bin), which adds 3 to the result.
So finally result equals 8.
WARNING: Segment may contain billion elements, to pass this kata, your solution cannot iterate through all numbers in the segment!
*/

function countOnes (l, r) {
  let count = 0;
  let count2 = 0;
  let arrNum = Math.log2(r).toString(2).split('');
  const countBiDegrees = (n) => {
    // Функция вычисления countOnes для степеней двойки.
    n = Math.log2(parseInt(n, 2));
    return n*(Math.pow(2, n - 1)) + 1;
  }
  const counter = (n) => {
    /* 
    Функция вычисления countOnes чисел, отличных от степеней двойки.
    Алгоритм: двоичное число разбивается на разряды - степени двойки - для каждого разряда n функцией countBiDegrees вычисляется количество
    единиц, содержащихся во всех двоичных числах этого разряда, и складывается в переменную count2, 
    в переменную floo складывается количество чисел разряда n, содержащихся в разряде n+1.
    */
    let arrNum = n.toString(2).split('');
    let count = arrNum.length - 1;
    let count2 = 0;
    let floo = 0;
    for (let j = 0; j < arrNum.length; j++) {
      
      if (arrNum[j] === '1') {
        j === 0 ? count2 += countBiDegrees(Math.pow(10, count)) : count2 += countBiDegrees(Math.pow(10, count)) + floo ;
        floo = parseInt((Number(n.toString(2).substr(j)) - Math.pow(10, count)), 2);
      }
      
      count--;
    }
    return count2;
  }
  /* 
  Простой пересчёт количества единиц, содержащихся во всех двоичных числах между l и r включительно.
  Вызывает перегрузку при достаточно большом r. Служит для проверки предыдущих алгоритмов.
  for (let i = l; i <= r; i++ ) {
    arrNum = i.toString(2).split('');
    
    for (let j = 0; j < arrNum.length; j++) {
      if (arrNum[j] === '1') {
        count++;
        count2++;
      }
      
    }
    if (i % 8 === 0) {
      console.log(count2);
      count2 = 0;
    }
  }
  console.log(count);
  */
  return  counter(r) - counter(l - 1);
}
countOnes (7527, 18580);
