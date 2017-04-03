import React, { Component } from 'react';
import DateComponent from '../Date/Date.component';
import './City.component.css';

class CityComponent extends Component {
    render() {
        return (
            <div className="city-container">
                <div className="date">
                    <span className="mounth">April </span>
                    <span className="day">3, </span>
                    <span className="year">2017</span>
                </div>
                <DateComponent />
            </div>
        );
    }
}

export default CityComponent;