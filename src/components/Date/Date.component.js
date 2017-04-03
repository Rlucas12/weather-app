import React, { Component } from 'react';
import './Date.component.css';

class DateComponent extends Component {
    render() {
        return (
            <div className="date-container">
                <div className="temperature">26°</div>
                <div className="city">Montpellier</div>
                <div className="description">Sunny</div>
            </div>
        );
    }
}

export default DateComponent;