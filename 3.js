"use strict";

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/


function randomArray(length = 5) {
    return Array.from(Array(length), () => Math.floor(Math.random() * 10));
}

const arr = randomArray();
console.log(arr);

// 1 задача
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(`Сумма элементов массива ${sum}`);


// 2 задача
const arrMin = Math.min.apply(null, arr);
console.log(`Минимальное значение в массиве ${arrMin}`);

// 3 задача
const arrIndex = arr;
const newIndex = [];

for (let i = 0; i < arrIndex.length; i++) {
    if (arrIndex[i] === 3) {
        newIndex.push(i);
    }
}
console.log(newIndex);







// Поиск индеска
// let foundIndex = arrIndex.findIndex(n => n === 3);
// console.log(foundIndex);


