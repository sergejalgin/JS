"use strict";

/*
Выполнить все задачи. Комментарии, в которых написаны задачи, не стирать,
код с решением задачи пишем под комментарием.
*/

/*
1. Найти по id, используя getElementById, элемент с id равным "super_link" и
вывести этот элемент в консоль.
*/
const superLink = document.getElementById('super_link');
// const superLink = document.querySelector('#super_link');
console.log(superLink);



/*
2. Внутри всех элементов на странице, которые имеют класс "card-link",
поменяйте текст внутри элемента на "ссылка".
*/
const newText = document.querySelectorAll('.card-link');

newText.forEach(element => {
    element.textContent = 'ссылка';
});
for (let i = 0; i < newText.length; i++) {
    newText[i].textContent = 'ссылка';
}





/*
3. Найти все элементы на странице с классом "card-link", которые лежат в
элементе с классом "card-body" и вывести полученную коллекцию в консоль.
*/

const element = document.querySelectorAll('.card-body .card-link');
console.log(element);






/*
4. Найти первый попавшийся элемент на странице у которого есть атрибут
data-number со значением 50 и вывести его в консоль.
*/
const number = document.querySelector('[data-number="50"]');
console.log(number);





/*
5. Выведите содержимое title страницы в консоль.
*/

console.log(document.title);




/*
6. Получите элемент с классом "card-title" и выведите его родительский узел
в консоль.
*/
const title = document.querySelector('.card-title');
console.log(title.parentNode);



/*
7. Создайте тег `p`, запишите внутри него текст "Привет" и добавьте созданный
тег в начало элемента, который имеет класс "card".
*/
const card = document.querySelector('.card');
const p = document.createElement('p');
p.textContent = 'Привет';
card.prepend(p);



/*
8. Удалите тег h6 на странице.
*/
const paragraphH6 = document.querySelector('h6');
paragraphH6.remove();

