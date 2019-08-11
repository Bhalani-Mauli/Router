import React, { Component } from 'react';
import Counter1 from './Counter1';

 
export default class Counters extends Component {


    render() {

        return (
            <div className="container">


                {
                    this.props.counters.map(counter =>
                        <Counter1
                            key={counter.id}
                            counter={counter}
                            Id={counter.id} count={counter.count}
                            handleIncrement={this.props.handleIncrement}
                            handleDecrement={this.props.handleDecrement}
                            handleReset={this.props.handleReset}
                            onDeletecounter={this.props.onDeletecounter}
                        />


                    )
                }

            </div>


        )
    }

}
