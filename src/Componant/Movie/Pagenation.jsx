import React, { Component } from 'react';
import _ from 'lodash';

export default class Pagenation extends Component {

handlePageCount = () =>{
    
    //const { itemsCount,pageSize } = this.props;
    const {itemsCount,pageSize} = this.props;
//    alert(itemsCount);
  //  alert(this.props.pageSize);
    const pageCount = Math.ceil(itemsCount/pageSize); //math.ceil is use to flote to interger
   // alert(pageCount);
    if(pageCount === 1){
    return null;
    }
    else 
    {
        const pages = _.range(1, pageCount + 1); //it will retun array so we will use it now in loop to display page number
        return pages.map(page =>
            (<li key = {page} className={page === this.props.currentPage ? 'page-item active' : 'page-item'}>
                <a onClick={() => this.props.handlePageChange(page)} class = "page-link" href="#">{page}</a>

            </li>)
            )
    }
}

    render() {
        return (
            <React.Fragment>
        

<nav aria-label="Page navigation example">
  <ul class="pagination">
   {this.handlePageCount()}
  </ul>
</nav>
            </React.Fragment>
        )
    }
}
