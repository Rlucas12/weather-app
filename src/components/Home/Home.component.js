import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import CityComponent from '../City/City.component';
import StatisticComponent from '../Statistic/Statistic.component';
import PrevisionComponent from '../Prevision/Prevision.component';
import './Home.component.css';

class HomeComponent extends Component {
    render() {
        return (
            <div className="home-container">
                <div className="left-panel">
                    <Carousel>
                        <CityComponent />
                        <CityComponent />
                        <CityComponent />
                    </Carousel>
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