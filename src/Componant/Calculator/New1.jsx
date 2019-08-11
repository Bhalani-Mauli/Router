import React, { Component } from 'react';
import Keypad from './Keypad';
import Output from './Output';

export default class New1 extends Component {


    constructor(props) {

        super(props);

        this.state = {
            result: ""
        };
    }

    buttonPressed = buttonName => {
        if (buttonName === "=") {
            this.calculate();
        }
        else
            this.setState({ result: this.state.result + buttonName });
    }; 
    calculate = () => {
        this.setState({
            result: eval(this.state.result)
        });
    };


    render() {

        return (
            <div className="container">
                <Output result={this.state.result} />
                <Keypad buttonpressed={this.buttonPressed} />
            </div>

        )
    }

}
