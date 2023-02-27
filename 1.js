"use strict";

/*
Выполнить все задачи. Комментарии, в которых написаны задачи, не стирать, 
код с решением задачи пишем под комментарием.
*/

/*
1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все
теги будут созданы браузером.
*/
document.addEventListener('DOMContentLoaded', () => {
    console.log('все теги прогрузились');
});


/*
2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все
ресурсы страницы будут загружены.
*/

window.addEventListener('load', () => {
    console.log('страница загрузилась');
});



/*
3. При клике на какой-либо тег на странице в консоль должно выводиться
сообщение наподобие:
Класс "super_element" присутствует в элементе "div".
сообщение должно определять, присутствует или отсутствует класс 
"super_element" у элемента, а также выводить в нижнем регистре верный тег 
в данной строке, по которому был совершен клик.
Необходимо использовать делегирование.
*/
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('super_element')) {
        console.log(`Класс "super_element" присутствует в элементе "${e.target.tagName.toLowerCase()}"`);
    } else {
        console.log(`Класс "super_element" отсутствует в элементе "${e.target.tagName.toLowerCase()}"`);
    }
});

// const containStr = event.target.classList.contains('super_element') 
//   ? 'присутствует' : 'отсутствует';
// console.log(`Класс "super_element" ${containStr} в элементе "${event.target.tagName.toLowerCase()}".`);


/*
4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение:
"Вы навели на textarea."
*/
const textarea = document.querySelector('textarea');

textarea.addEventListener('mouseover', function (e) {
    console.log('Вы навели на textarea.');
});





/*
5. Необходимо повесить событие клика на тег ul. В обработчике события в
консоль необходимо выводить текст, который записан внутри элемента кнопки,
по которой был произведен клик.
Если клик был не по кнопке, то ничего выводить не нужно.
Необходимо использовать делегирование.
Если у вас получается другой порядок вывода, значит, скорее всего, вы неверно 
использовали, либо вовсе не использовали, делегирование в 3 и 5 заданиях.
*/

const ulEl = document.querySelector('ul');

ulEl.addEventListener('click', function (e) {
    if (e.target.tagName !== 'BUTTON') {
        return
    }
    console.log(e.target.textContent);
});



/*
6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только
потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul?
Ответ необходимо написать здесь же, под этим комментарием, своими словами.
*/

// Возможно, это связано с фазой захвата. Сначала по древовидной структуре находятся теги, а затем уже классы. Поэтому сначала проверятся li, а затем class.


/*
7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.
*/

const liEl = document.querySelectorAll('li:nth-child(even)');

liEl.forEach(element => {
    element.style.backgroundColor = '#ccc';
});