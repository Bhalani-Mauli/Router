
import React, { Component } from 'react';
// import Like from './Like';
import Pagenation from './Pagenation';
import { getMovies } from '../Services/fakeMovieService';



export default class Movies extends Component {

  state = {
    movies: getMovies(),
    pageSize: 5,
    currentPage: 2
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  }

  handlePageChange(pageNumber) {
    console.log(`currentPage is ${pageNumber}`);
    this.setState({currentPage: pageNumber});
  }

  render() {
    return (
      <React.Fragment>
        <h1>Movies</h1>
        <table class="table">
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
            {this.state.movies.map(movie => (
              <tr>
                <th scope="row">{movie.title}</th>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInstock}</td>
                <td>{movie.dailyRentalRate}</td>
                {/* <td><Like /></td> */}
              </tr>
            ))}
             <Pagenation
              pageSize={this.state.pageSize}
              itemsCount={this.state.movies.length}
              handlePageChange={this.handlePageChange}
              currentPage={this.state.currentPage}
              onchange={this.handlePageChange}

    //           const pageNumbers = [];
    // for (let i = 1; i <= Math.ceil(pageSize.length / currentPage); i++) {
    //   pageNumbers.push(i);
    // }
            /> 

          </tbody>
        </table>

      </React.Fragment>
    )
  }
}
