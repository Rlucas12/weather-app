import React, { Component } from 'react';
import PrevisionCellComponent from './Prevision-cell/Prevision-cell.component';
import './Prevision.component.css';

class PrevisionComponent extends Component {
    render() {
        return (
            <div className="prevision-container">
                <div className="prevision-header">
                    <span className="title">Today</span>
                    <span className="title">Week</span>
                    <span className="title">Month</span>
                </div>
                <div className="separation"></div>
                <div className="tab-selected"></div>
                <div className="prevision-content">
                    <PrevisionCellComponent time="13h00" description="Party cloudy" temperature="28°C"/>
                    <PrevisionCellComponent time="14h00" description="Sunny" temperature="29°C"/>
                    <PrevisionCellComponent time="15h00" description="Cloudy" temperature="27°C"/>
                </div>
            </div>
        );
    }
}

export default PrevisionComponent;