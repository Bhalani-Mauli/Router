import React, { Component } from 'react';


export default class Counter1 extends Component {

 
    render() {
 
        return (
            <div className="container">
                <span className="badge m-2 badge-primary">{this.props.count}</span>
                <button type="button"
                    onClick={() => this.props.handleIncrement(this.props.counter)}
                    className="btn btn-primary"
                >Increment</button>

                <button type="button" className="btn btn-secondary"
                    onClick={() => this.props.handleDecrement(this.props.counter)}
                >Decrement</button>
                <button type="button" className="btn btn-success"
                    onClick={() => this.props.handleReset(this.props.counter)}
                >Reset</button>
                <button
                    onClick={() => this.props.onDeletecounter(this.props.Id)}
                    className="btn btn-secondary btn-sm"
                >
                    Del Counter compo
        </button>


            </div>

        )
    }

}
