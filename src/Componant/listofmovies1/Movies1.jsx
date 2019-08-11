
import React, { Component } from 'react';
//import Like from './common/Like';
//import Listgroup from './common/Listgroup';
import Pagination from '../common/Pagination';
import _ from 'lodash';
import { getMovies } from '../../services/fakeMovieService';
import { getGenres } from '../Services/fakeGenreService';
//import Listgroup from './Listgroup';
import ListGroupsfc from './Listgroupsfc';


export default class Movies1 extends Component {

    state = {
        movies: getMovies(),
        genres: [],
        pageSize: 4,
        currentPage: 1,
        selectedGenre: { name: "All Genres", _id: "AllGenres" }
    }

    componentDidMount() {
        const genres = [{ name: "All Genres", _id: "AllGenres" }, ...getGenres()];
        //this.setState({ movies: getMovies(), genres: genres });
        this.setState({ genres: genres });
        //const selectedGenre = _.head[genres];
        //this.setState({ selectedGenre: selectedGenre });
    }

    handelLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] };
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });
    };

    handelPageChange = (page) => {

        this.setState({ currentPage: page });
    };

    handelPageinatedata = (movies, pageSize, currentPage) => {
        const startIndex = (currentPage - 1) * pageSize;
        //const startIndex = 5;
        //alert(startIndex);
        //const newmov = _.take(movies.slice(startIndex), pageSize);
        const newmov = _.take(movies.slice(startIndex), pageSize);
        return newmov;

    };


    handelGenreSelect = (genre) => {
        const selectedGenre = genre;
        this.setState({ selectedGenre: selectedGenre });

    };

    render() {


        const filteredmovies = this.state.selectedGenre._id === "AllGenres" ? this.state.movies :
            this.state.movies.filter(movie => movie.genre._id === this.state.selectedGenre._id)

        //console.log(filteredmovies);

        //const movies = this.handelPageinatedata(this.state.movies, this.state.pageSize, this.state.currentPage);
        const movies = this.handelPageinatedata(filteredmovies, this.state.pageSize, this.state.currentPage);

        return (

            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <h1>Genre</h1>
                        <ListGroupsfc genres={this.state.genres}
                            handelGenreSelect={this.handelGenreSelect}
                            SelectGenre={this.state.selectedGenre}
                        />
                    </div>
                    <div className="col">
                        <h1>Movies</h1>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Genre</th>
                                    <th scope="col">Stock</th>
                                    <th scope="col">Rate</th>
                                    <th scope="col">Like</th>
                                </tr>
                            </thead>
                            <tbody>

                                {movies.map(movie => (
                                    <tr key={movie._id}>
                                        <th scope="row">{movie.title}</th>
                                        <td>{movie.genre.name}</td>
                                        <td>{movie.numberInStock}</td>
                                        <td>{movie.dailyRentalRate}</td>
                                        <td>
                                            {/* <Like liked={movie.liked} handelLike={() => this.handelLike(movie)} /> */}
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>

                        <Pagination itemsCount={filteredmovies.length} pageSize={this.state.pageSize}
                            currentPage={this.state.currentPage}
                            handelPageChange={this.handelPageChange} />
                    </div>
                </div>
            </div>
        )
    }

}