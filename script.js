/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

// 'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

movieDB.movies.sort();


let promo__adv = document.querySelectorAll('.promo__adv img')
let dramma = document.querySelector('.promo__genre')
let ul = document.querySelector('.promo__interactive-list')

promo__adv.forEach(item => {
    item.remove()
})

// 2
dramma.innerHTML = 'Драмма'

// 4,5

for(let item of movieDB.movies) {
    let li = document.createElement('li')
    let div = document.createElement('div')    
    li.classList.add('promo__interactive-item')
    div.classList.add('delete')

    ul.append(li)
    li.append(div)
    
    li.onmouseenter = () => {
        img
    }

    let idx = movieDB.movies.indexOf(item) + 1
    
    li.innerHTML = `${idx} ${item}`

}

const izmena__bg = document.querySelector('.promo__bg');
izmena__bg.style.backgroundImage = 'url(./img/bg.jpg)';

// function sorted(alphabet) {
    //     return alphabet.sort((a,b) => a-b)
// }

// sorted(movieDB.movies)

// console.log(movieDB);