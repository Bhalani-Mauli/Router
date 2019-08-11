import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";

export default class Home extends Component { 

    render() {

        return (
            <>
            <h1>This is home page</h1>
            <Link to="/">Landing</Link>
            </>

 
        )
    }

}
