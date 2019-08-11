import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import Home from './Home';

export default class Router extends Component {

    render() {

        return (
            
                <> 
                    <Router>
                    <Route to="/" component={Home}></Route>
                    </Router>
                </>
            

        )
    }

}
