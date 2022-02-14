'use strict';
let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};
console.log(personalMovieDB);

if (personalMovieDB.count < 10) {
    alert("Просмотренно довольно мало фильмов");
} else if (personalMovieDB.count >=10 && personalMovieDB.count <=30) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count >30) {
    alert('Вы киноман')
} else {
    alert('Произошла ошибка');
}












// for (let i = 1; i <= numberOfFilms; i++) {
//     let a = prompt('Один из последних просмотренных фильмов', '');
//     let b = prompt('На сколько оцените его', '');
//     if (a == '' || b == '' || a == null || b == null || a.length > 50)  {
//         alert('не тупи');
//         i--;
//     } else {
//         personalMovieDB.movies[a] = b;
//     }
// }
// console.log(personalMovieDB);