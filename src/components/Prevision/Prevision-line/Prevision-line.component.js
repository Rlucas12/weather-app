import React, { Component } from 'react';
import './Prevision-line.component.css';

class PrevisionLineComponent extends Component {
    render() {
        return (
            <div className="prevision-line-container">
                <span className="prevision-line-time">{this.props.time}</span>
                <span className="prevision-line-description">{this.props.description}</span>
                <span className="prevision-line-temperature">{this.props.temperature}</span>
            </div>
        );
    }
}

export default PrevisionLineComponent;