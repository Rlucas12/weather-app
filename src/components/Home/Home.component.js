import React, { Component } from 'react';
import CityComponent from '../City/City.component';
import StatisticComponent from '../Statistic/Statistic.component';

class HomeComponent extends Component {
    render() {
        return (
            <div>
                <CityComponent />
                <StatisticComponent />
            </div>
        );
    }
}

export default HomeComponent;