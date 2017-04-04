import React, { Component } from 'react';
import StatisticCellComponent from './Statistic-cell/Statistic-cell.component';
import './Statistic.component.css';

class StatisticComponent extends Component {
    render() {
        return (
            <div className="statistic-container">
                <div className="statistic-header">
                    <div className="title">Statistics</div>
                    <div className="more">more</div>
                </div>
                <div className="separation"></div>
                <div className="statistic-content">
                    <StatisticCellComponent icn="icon icon-water" content="35%"/>
                    <StatisticCellComponent icn="icon icon-wind-2" content="Easterly"/>
                    <StatisticCellComponent icn="icon icon-wind" content="27 km/h"/>
                    <StatisticCellComponent icn="icon icon-cloud" content="17%"/>
                </div>
            </div>
        );
    }
}

export default StatisticComponent;