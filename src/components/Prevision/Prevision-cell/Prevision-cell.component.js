import React, { Component } from 'react';
import './Prevision-cell.component.css';

class PrevisionCellComponent extends Component {
    render() {
        return (
            <div className="prevision-cell-container">
                <span className="prevision-cell-time">{this.props.time}</span>
                <span className="prevision-cell-description">{this.props.description}</span>
                <span className="prevision-cell-temperature">{this.props.temperature}</span>
            </div>
        );
    }
}

export default PrevisionCellComponent;