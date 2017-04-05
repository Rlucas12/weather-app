import React, { Component } from 'react';
import CityComponent from '../City/City.component';
import StatisticComponent from '../Statistic/Statistic.component';
import PrevisionComponent from '../Prevision/Prevision.component';
import './Home.component.css';

class HomeComponent extends Component {
    render() {
        return (
            <div className="home-container">
                <div className="left-panel">
                    <CityComponent />
                </div>
                <div className="right-panel">
                    <StatisticComponent />
                    <PrevisionComponent />
                </div>
            </div>
        );
    }
}

export default HomeComponent;