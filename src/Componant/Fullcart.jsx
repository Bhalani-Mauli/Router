import React, { Component } from 'react';
import Navbar from './Navbar';
import Counters from './Counters';


export default class Fullcart extends Component {



    state = {
        counters: [
            { id: 1, count: 0 },
            { id: 2, count: 0 },
            { id: 3, count: 0 },
            { id: 4, count: 0 },
            { id: 5, count: 0 },
            { id: 6, count: 0 }
        ]
    };

    handleIncrement = (counter) => {

        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
console.log(counters);
console.log(index);
        counters[index] = { ...counter };
        counters[index].count++;


        this.setState({ counters: counters });

    };


    handleDecrement = (counter) => {

        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);


        counters[index] = { ...counter };
        if (counters[index].count > 0) {
            counters[index].count--;
        }


        this.setState({ counters: counters });

    };

    handleReset = (counter) => {

        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);

        counters[index] = { ...counter };
        counters[index].count = 0;

        this.setState({ counters: counters });


    };


    handleAllReset = () => {

        const counters = this.state.counters.map(counter => {
            counter.count = 0;
            return counter;
        });

        this.setState({ counters: counters });

    };

    handelTotalCount = () => {
        let TotalCount = 0;

        this.state.counters.map(counter => { TotalCount += counter.count; });

        return TotalCount;

    };

    handleDeleteCounter = (counterId) => {
        //console.log("counter del with ", counterId);

        const counters = this.state.counters.filter(counter => counter.id !== counterId);
        this.setState({ counters: counters });


    };



    render() {

        return (
            <div className="container">
                <Navbar totalcounters={this.state.counters.length}
                    handelTotalCount={this.handelTotalCount}
                />


                <button type="button" className="btn btn-success"
                    onClick={this.handleAllReset}
                >Reset All</button>

                <main role="main" className="container">
                    <Counters
                        counters={this.state.counters}
                        handleReset={this.handleReset}
                        onDeletecounter={this.handleDeleteCounter}
                        handleDecrement={this.handleDecrement}
                        handleIncrement={this.handleIncrement}
                    />



                </main>

            </div>


        )
    }

}
