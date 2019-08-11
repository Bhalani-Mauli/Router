import React, { Component } from 'react';


export default class Simplecalculator extends Component {

    state = {
        calculatoron: false,
        VResult: 0,
        calcstring: "",
        calcuflag: true
    };

    handleoncalculator = () => {

        //let calculatoron = true;
        //this.setState({ calculatoron: calculatoron });

        if (this.state.calculatoron === false) {
            let calculatoron = true;
            this.setState({ calculatoron: calculatoron });

        } else {

            let calculatoron = false;
            this.setState({ calculatoron: calculatoron });

        }




    };

    handleClear = () => {
        let calcstring = "";
        this.setState({ calcstring: calcstring });
        let VResult = 0;
        this.setState({ VResult: VResult });

    }

    handleResult = (e) => {

        if (this.state.calculatoron === true) {



            const name = e.target.name;


            if (name !== "=") {

                let calcstring = this.state.calcstring;
                calcstring = calcstring + name;


                this.setState({ calcstring: calcstring });


                if (name === "+" || name === "-" || name === "/" || name === "*") {

                    let calcuflag = false;
                    this.setState({ calcuflag: calcuflag });

                } else {
                    let calcuflag = true;
                    this.setState({ calcuflag: calcuflag });


                }
            } else {

                //let VResult = this.state.calcstring;
                //let VResult = eval(this.state.calcstring);
                let VResult = eval(this.state.calcstring);
                this.setState({ VResult: VResult });

            }
        }
    };


    render() {

        return (
            <div className="container">
                <div className="row">
                    <h1>Simple Calculator</h1>

                </div>
                <div className="row">
                    <p> Result =  {this.state.VResult} </p>
                </div>

                <div className="row">

                    <div className="btn-group mr-2" role="group" aria-label="First group">
                        <button type="button"
                            name="1"
                            className={this.state.calculatoron === true ? "btn btn-outline-primary" : "btn btn-secondary disabled"}
                            title={this.state.calculatoron === true ? "1" : "Plz click on ON to Start"}
                            onClick={this.handleResult}
                        >1</button>
                        <button type="button"
                            name="2"
                            className={this.state.calculatoron === true ? "btn btn-outline-primary" : "btn btn-secondary disabled"}
                            title={this.state.calculatoron === true ? "2" : "Plz click on ON to Start"}
                            onClick={this.handleResult}
                        >2</button>
                        <button type="button"
                            name="3"
                            className={this.state.calculatoron === true ? "btn btn-outline-primary" : "btn btn-secondary disabled"}
                            title={this.state.calculatoron === true ? "3" : "Plz click on ON to Start"}
                            onClick={this.handleResult}
                        >3</button>
                        <button type="button"
                            name="+"
                            className={this.state.calculatoron === true && this.state.calcuflag === true ? "btn btn-outline-primary" : "btn btn-secondary disabled"}
                            title={this.state.calculatoron === true ? "+" : "Plz click on ON to Start"}
                            onClick={this.handleResult}
                        >+</button>
                    </div>
                </div>
                <div className="row">
                    <div className="btn-group mr-2" role="group" aria-label="First group">

                        <button type="button"
                            name="4"
                            className={this.state.calculatoron === true ? "btn btn-outline-primary" : "btn btn-secondary disabled"}
                            title={this.state.calculatoron === true ? "4" : "Plz click on ON to Start"}
                            onClick={this.handleResult}
                        >4</button>
                        <button type="button"
                            name="5"
                            className={this.state.calculatoron === true ? "btn btn-outline-primary" : "btn btn-secondary disabled"}
                            title={this.state.calculatoron === true ? "5" : "Plz click on ON to Start"}
                            onClick={this.handleResult}
                        >5</button>
                        <button type="button"
                            name="6"
                            className={this.state.calculatoron === true ? "btn btn-outline-primary" : "btn btn-secondary disabled"}
                            title={this.state.calculatoron === true ? "6" : "Plz click on ON to Start"}
                            onClick={this.handleResult}
                        >6</button>
                        <button type="button"
                            name="-"
                            className={this.state.calculatoron === true && this.state.calcuflag === true ? "btn btn-outline-primary" : "btn btn-secondary disabled"}
                            title={this.state.calculatoron === true ? "-" : "Plz click on ON to Start"}
                            onClick={this.handleResult}
                        >-</button>
                    </div>
                </div>
                <div className="row">
                    <div className="btn-group mr-2" role="group" aria-label="First group">
                        <button type="button"
                            name="7"
                            className={this.state.calculatoron === true ? "btn btn-outline-primary" : "btn btn-secondary disabled"}
                            title={this.state.calculatoron === true ? "7" : "Plz click on ON to Start"}
                            onClick={this.handleResult}
                        >7</button>
                        <button type="button"
                            name="8"
                            className={this.state.calculatoron === true ? "btn btn-outline-primary" : "btn btn-secondary disabled"}
                            title={this.state.calculatoron === true ? "8" : "Plz click on ON to Start"}
                            onClick={this.handleResult}
                        >8</button>
                        <button type="button"
                            name="9"
                            className={this.state.calculatoron === true ? "btn btn-outline-primary" : "btn btn-secondary disabled"}
                            title={this.state.calculatoron === true ? "9" : "Plz click on ON to Start"}
                            onClick={this.handleResult}
                        >9</button>
                        <button type="button"
                            name="*"
                            className={this.state.calculatoron === true && this.state.calcuflag === true ? "btn btn-outline-primary" : "btn btn-secondary disabled"}
                            title={this.state.calculatoron === true ? "*" : "Plz click on ON to Start"}
                            onClick={this.handleResult}
                        >*</button>
                        <button type="button"
                            name="/"
                            className={this.state.calculatoron === true && this.state.calcuflag === true ? "btn btn-outline-primary" : "btn btn-secondary disabled"}
                            title={this.state.calculatoron === true ? "/" : "Plz click on ON to Start"}
                            onClick={this.handleResult}
                        >/</button>
                    </div>
                </div>

                <div className="row">
                    <div className="btn-group mr-2" role="group" aria-label="First group">

                        <button type="button"
                            name="0"
                            className={this.state.calculatoron === true ? "btn btn-outline-primary" : "btn btn-secondary disabled"}
                            title={this.state.calculatoron === true ? "0" : "Plz click on ON to Start"}
                            onClick={this.handleResult}
                        >0</button>

                        <button type="button"
                            name="Clear"
                            className={this.state.calculatoron === true ? "btn btn-outline-primary" : "btn btn-secondary disabled"}
                            title={this.state.calculatoron === true ? "Clear" : "Plz click on ON to Start"}
                            onClick={this.handleClear}
                        >Clear</button>

                        <button type="button"
                            name="="
                            className={this.state.calculatoron === true ? "btn btn-outline-primary" : "btn btn-secondary disabled"}
                            title={this.state.calculatoron === true ? "=" : "Plz click on ON to Start"}
                            onClick={this.handleResult}
                        >=</button>
                        <button type="button" className="btn btn-secondary bg-success" onClick={this.handleoncalculator} >
                            {this.state.calculatoron === true ? "Off" : "On"}
                        </button>
                    </div>
                </div>



            </div >


        )
    }

}
