import React, { Component } from 'react';


export default class Calculator extends Component {


    constructor(props) {

        super(props);
    
        this.state = {
          no1: "",
          no2: "",
          result: 0
        }
      }

      fun_adding = () => {
        alert("tesing");
        this.state.result = this.state.no1 + this.state.no2;
        this.setState({ result: this.state.result });
      }




    render() {

        return (
            <div className="container">
                <h1>Calculator</h1>
{this.state.result}
                <button class="btn btn-primary" type="submit" onClick={this.fun_adding}>1</button>
                <button class="btn btn-primary" type="submit">2</button>
                <button class="btn btn-primary" type="submit">3</button>
                <button class="btn btn-primary" type="submit">+</button>
                <br/>
                <button class="btn btn-primary" type="submit">4</button>
                <button class="btn btn-primary" type="submit">5</button>
                <button class="btn btn-primary" type="submit">6</button>  
                <button class="btn btn-primary" type="submit">-</button>
                <br/>
                <button class="btn btn-primary" type="submit">7</button>
                <button class="btn btn-primary" type="submit">8</button>
                <button class="btn btn-primary" type="submit">9</button>
                <button class="btn btn-primary" type="submit">*</button>
                <br/>
                <button class="btn btn-primary" type="submit">0</button>
                <button class="btn btn-primary" type="submit">C</button>
                <button class="btn btn-primary" type="submit">=</button>
                <button class="btn btn-primary" type="submit">/</button>
                <br/>
                <button class="btn btn-primary" type="submit">On</button>
          </div>


        )
    }

}
