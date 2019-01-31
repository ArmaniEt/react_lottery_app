import React, { Component } from 'react';
import './RandomNum.css';


class Cards extends Component {
    render() {
        return(
            <div className="card">
                <div className="circle">
                    <p className="number">{this.props.number}</p>
                </div>
            </div>
        )
    }

}

export default Cards;



// Create a component with cards and numbers *
// Add basic styles for our cards *
// Add button for click with event *
// Define constructor or default properties for numbers
// Define a method that could generate numbers
// Do it with state in App.js




