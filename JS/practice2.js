if (personalMovieDB.count < 10) {
    alert("Просмотренно довольно мало фильмов");
} else if (personalMovieDB.count >=10 && personalMovieDB.count <=30) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count >30) {
    alert('Вы киноман')
} else {
    alert('Произошла ошибка');
}