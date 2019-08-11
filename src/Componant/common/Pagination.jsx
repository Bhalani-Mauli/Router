import React, { Component } from 'react';
import _ from 'lodash';


export default class Pagination extends Component {

    handelPageCount = () => {
        const { itemsCount, pageSize } = this.props;

        const PageCount = Math.ceil(itemsCount / pageSize); // convert flote to int

        if (PageCount === 1) {
            return null;
        }

        else {

            const pages = _.range(1, PageCount + 1); // it will retrun array so we will use it now in loop to display page number

            return pages.map(page =>
                (<li key={page} className={page === this.props.currentPage ? 'page-item active' : 'page-item'}>
                    <a onClick={() => this.props.handelPageChange(page)} className="page-link" href="#">{page}</a>
                </li>));

        }



        //return pages;

    };



    render() {
        return (
            <React.Fragment>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">

                        {this.handelPageCount()}


                    </ul>
                </nav>

            </React.Fragment>

        )
    }

}

