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
        let newArray = [];
        while(newArray.length < 5) {
            let randomNum = Math.floor(Math.random() * 37 - 5) + 5;
            if (newArray.indexOf(randomNum) === -1) {
                newArray.push(randomNum);
            }
        }


        let stateArr = {...this.state};
        stateArr.numbers = newArray.sort((a, b) => a - b);
        this.setState(stateArr);

    };


}

export default App;

// how to check if previous number is smaller than the next