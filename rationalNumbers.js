/*
Рациональное число — число, представляемое обыкновенной дробью m/n, числитель m — целое число, а знаменатель n — натуральное число. Пример рационального числа: 2/3.

Формулы
Сложение
a/b + c/d = (a * d + b * c) / (b * d)
Вычитание
a/b - c/d = (a * d - b * c) / (b * d)
Умножение
a/b * c/d = (a * c) / (b * d)
Деление
a/b / c/d = (a * d) / (b * c)
Равенство
a/b = c/d, если a * d = c * b
rational.js
Реализуйте абстракцию для работы с рациональными числами, используя пары:

Конструктор make(numer, denom).

Селекторы numer (числитель) и denom (знаменатель).

Функцию toString, возвращающую строковое представление рационального числа. Например для дроби 3/4 созданной так make(3, 4), строковым представлением будет 3 / 4.

Предикат isEqual, проверяющую равенство двух рациональных чисел. Например isEqual(make(1, 2), make(2, 4)).

Функцию add, выполняющую сложение дробей.

Функцию sub, выполняющую вычитание дробей.

Функцию mul, выполняющую умножение дробей.

Функцию div, выполняющую деление дробей.

Экспортируйте созданные функции.

Обратите внимание, что результатом любой арифметической операции над рациональным числом будет рациональное число.

Пример:

const rat1 = make(2, 3);
const rat12 = make(4, 6);
const rat2 = make(7, 2);

toString(rat12); // '4 / 6'
isEqual(rat1, rat12); // true

add(rat1, rat2); // 25/6
sub(rat2, rat1); // 17/6
mul(rat1, rat2); // 14/6
div(rat1, rat2); // 4/21
*/


const cons = (x, y) => m => m(x, y);
const car =  (pair) => pair ((x, y) => x);
const cdr =  (pair) => pair ((x, y) => y);
const make = (x, y) =>  cons(x, y);
 const numer = car(make);
 const denom = cdr(make);
 const toString = rat => `${numer(rat)} / ${denom(rat)}`;
 const isEqual = (ratio1, ratio2) => numer(ratio1) * denom(ratio2) === numer(ratio2) * denom(ratio1);
 const add = (ratio1, ratio2) => (numer(ratio1) * denom(ratio2) + numer(ratio2) * denom(ratio1)) + ' / ' + (denom(ratio1) * denom(ratio2));
 const sub = (ratio1, ratio2) => (numer(ratio1) * denom(ratio2) - numer(ratio2) * denom(ratio1)) + ' / ' + (denom(ratio1) * denom(ratio2));
 const mul = (ratio1, ratio2) => (numer(ratio1) * numer(ratio2)) + ' / ' + (denom(ratio1) * denom(ratio2));
 const div = (ratio1, ratio2) => (numer(ratio1) * denom(ratio2)) + ' / ' + (numer(ratio2) * denom(ratio1));
const rat1 = make(2, 3);
const rat12 = make(4, 6);
const rat2 = make(7, 2);
const rat11 = make(2, 3);

console.log(toString(rat1, rat11));
