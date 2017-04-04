import React, { Component } from 'react';
import './Statistic-cell.component.css';

class StatisticCellComponent extends Component {
    render() {
        return (
            <div className="statistic-cell-container">
                <span className={`statistic-cell-icn ${this.props.icn}`}></span>
                <span className="statistic-cell-content">{this.props.content}</span>
            </div>
        );
    }
}

export default StatisticCellComponent;