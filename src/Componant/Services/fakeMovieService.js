import * as genresAPI from "./fakeGenreService";

const movies = [
    {
        _id : "5b21ca3eeb1",
        title : "Vivah",
        genre : { _id : "5b21ca3eeb1", name : "Action" },
        numberInstock : 6,
        dailyRentalRate : 2.5,
        publishDate : "2018-01-03T19:04:28.809Z"
    },
    {
        _id : "5b21ca3eeb2",
        title : "Welcome",
        genre : { _id : "5b21ca3eeb2", name : "Comedy" },
        numberInstock : 5,
        dailyRentalRate : 2.5,
    },
    {
        _id : "5b21ca3eeb3",
        title : "Badla",
        genre : { _id : "5b21ca3eeb3", name : "Thriller" },
        numberInstock : 8,
        dailyRentalRate : 3.5,
    },
    {
        _id : "5b21ca3eeb3",
        title : "K.G.F Chapter1",
        genre : { _id : "5b21ca3eeb3", name : "Action" },
        numberInstock : 8,
        dailyRentalRate : 3.5,
    },
    {
        _id : "5b21ca3eeb3",
        title : "Golmal Again",
        genre : { _id : "5b21ca3eeb3", name : "Comedy" },
        numberInstock : 8,
        dailyRentalRate : 3.5,
    },
    {
        _id : "5b21ca3eeb3",
        title : "Kabir sing",
        genre : { _id : "5b21ca3eeb3", name : "Thriller" },
        numberInstock : 8,
        dailyRentalRate : 3.5,
    }
];

export function getMovies(){
    return movies;
}