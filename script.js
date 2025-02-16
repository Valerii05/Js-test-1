const numberOfFilms = prompt("How many films have you seen? ");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    pritave: false,
};

const a = prompt('Last your film name ?', ''),
    b = prompt('Put the mark for that film'),
    c = prompt('Last your film name ?', ''),
    d = prompt('Put the mark for that film');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log (personalMovieDB);