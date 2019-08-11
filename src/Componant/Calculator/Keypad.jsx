
import React, { Component } from 'react';


export default class Keypad extends Component {


    buttonPressed = e => {
        this.props.buttonPressed(e.target.name);
    };

    render() {

        return (
            <div className="container">
       <button name = "1" onClick={this.buttonPressed}>1</button> 
       <button name = "+" onClick={this.buttonPressed}>+</button> 
       <button name = "=" onClick={this.buttonPressed}>=</button>        
            </div>

        )
    }

}
