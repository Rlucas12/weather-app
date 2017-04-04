import React, { Component } from 'react';
import './Statistic-cell.component.css';

class StatisticCellComponent extends Component {
    render() {
        return (
            <div className="cell-container">
                <span className={`cell-icn ${this.props.icn}`}></span>
                <span className="cell-content">{this.props.content}</span>
            </div>
        );
    }
}

export default StatisticCellComponent;