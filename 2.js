"use strict";

/*
Необходимо попросить пользователя ввести число.
Если пользователь ввел отличное от числа значение, необходимо вывести в консоль
строку: "Значение задано неверно".
Необходимо создать функцию, которая будет принимать введенное пользователем
число. Функция должна вычесть из переданного ей числа 13% и вывести в консоль
сообщение "Размер заработной платы за вычетом налогов равен N."
*/

const number = prompt('Введите число');

const taxDeduction = (num) => {
    return num * 0.87;
};

if (Number.isNaN(number)) {
    console.log('Значение задано неверно')
} else {
    console.log(`Размер заработной платы за вычетом налогов равен 
    ${taxDeduction(number)}`);
};

// Number.isFinite(num) проверить что пользователь ввел правильное число, 
// можно превратить в число и проверить значение через Number.isFinite(num) 
// - проверяет что значение num число и что оно не Infinity и не NaN, в общем, 
// что это корректное число.
