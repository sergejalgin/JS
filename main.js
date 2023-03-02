// Создайте еще один файл main.js, в котором необходимо из значений переменной, 
// которая создана в файле data.js, сформировать контент из данных.
// Добавить данный контент на сайт, в div с классом app.


// console.log(jsonData);



jsonData.entries.forEach(e => {
    const divEl = document.querySelector('.app');

    const apiEl = document.createElement('h2');
    apiEl.textContent = e.API;
    const description = document.createElement('p');
    description.textContent = e.Description;
    const linkEl = document.createElement('a');
    linkEl.href = e.Link;
    linkEl.textContent = ('Перейти');

    divEl.appendChild(apiEl);
    divEl.appendChild(description);
    divEl.appendChild(linkEl);
});