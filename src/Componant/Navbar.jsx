import React, { Component } from 'react';


export default class Navbar extends Component {


    render() {
        return (

            <React.Fragment>
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand" href="/">Navbar</a>
                    <span className="navbar-brand">Total Counters = {this.props.totalcounters}</span>
                    <span className="navbar-brand">Total Count = {this.props.handelTotalCount()}</span>

                </nav>

            </React.Fragment>


        )
    }

}
