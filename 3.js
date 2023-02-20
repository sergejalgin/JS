"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения,
три числа. Проверять их не нужно.
*/

const number1 = +prompt('Введите первое число');
const number2 = +prompt('Введите второе число');
const number3 = +prompt('Введите третье число');



// function maxNumber(num1, num2, num3) {
//     let max = num1;
//     if (num1 < num2) {
//         max = num2;
//     } if (num2 < num3) {
//         max = num3;
//     }
//     return max;
// }

function maxNumber(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

console.log(`Максимальное значение среди чисел ${number1}, ${number2}, ${number3} 
равно ${maxNumber(number1, number2, number3)}.`);