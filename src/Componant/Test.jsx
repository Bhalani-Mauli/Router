import React, { Component } from 'react';
//import Like from './common/Like';
//import Listgroup from './common/Listgroup';
import Pagination from '../common/Pagination';
import _ from 'lodash';
import { getMovies } from '../Services/fakeMovieService';


export default class Movies extends Component {

    state = {
        movies: getMovies(),
        pageSize: 2,
        currentPage: 1
    }

    handelLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] };
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });

    };


    handelPageChange = (page) => {
        alert(page);
        this.setState({ currentPage: page });

    };

    handelPageinatedata = (movies, pageSize, currentPage) => {

        console.log(movies);
        console.log(pageSize);
        console.log(currentPage);


        const startIndex = (currentPage - 1) * pageSize;
        //const startIndex = 5;
        alert(startIndex);


        //const newmov = _.take(movies.slice(startIndex), pageSize);
        const newmov = _.take(movies.slice(startIndex), pageSize);
        console.log(newmov);
        return newmov;

    };




    render() {


        const movies = this.handelPageinatedata(this.state.movies, this.state.pageSize, this.state.currentPage);


        return (


            <div className="raw">
                <div className="col-2">
                    <h1>test My</h1>
                    {/* <Listgroup /> */}
                </div>
                <div className="col">
                    <h1>movies</h1>


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
                    <Pagination itemsCount={this.state.movies.length} pageSize={this.state.pageSize}
                        currentPage={this.state.currentPage}
                        handelPageChange={this.handelPageChange} />


                </div>

            </div>







        )
    }

}
