import React, { Component } from 'react';
import DateComponent from '../Date/Date.component';
import Moment from 'moment';
import Carousel from 'nuka-carousel';
import './City.component.css';

class CityComponent extends Component {
    render() {
        const today = Moment();
        return (
            <div className="city-container">
                <div className="date">
                    <span className="mounth">{today.format("MMMM")} </span>
                    <span className="day">{today.format("DD")}, </span>
                    <span className="year">{today.format("YYYY")}</span>
                </div>
                <Carousel>
                    <DateComponent />
                    <DateComponent />
                    <DateComponent />
                </Carousel>
            </div>
        );
    }
}

export default CityComponent;