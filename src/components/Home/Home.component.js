import React, { Component } from 'react';
import CityComponent from '../City/City.component';
import StatisticComponent from '../Statistic/Statistic.component';
import PrevisionComponent from '../Prevision/Prevision.component';

class HomeComponent extends Component {
    render() {
        return (
            <div>
                <CityComponent />
                <StatisticComponent />
                <PrevisionComponent />
            </div>
        );
    }
}

export default HomeComponent;