import React, {Component} from 'react';
import './App.css';
import Cards from './Cards/RandomNum';

class App extends Component {
    render() {
        return (
            <div>
                <div className="container">
                     {this.state.numbers.map((element, index) => (
                         <li className="card_li" key={index}>
                             <Cards number = {element}/>
                         </li>
                         ))}
                </div>
                <div className="button_wrapper">
                    <button onClick={this.addNums} className='button_gen'>Generate Numbers</button>
                </div>
            </div>

        );
    }

     state = {
                numbers: []
            };

    addNums = () => {
        const numbers = this.state.numbers;
        let index = 0;


        while(index < 5) {
            numbers[index] = Math.floor(Math.random() * 37 - 5) + 5;
            index++;

        }




        numbers.sort((a, b) => a - b); // sorting an array
        this.setState({numbers});

    };


}

export default App;

// how to check if previous number is smaller than the next