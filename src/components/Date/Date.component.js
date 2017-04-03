import React, { Component } from 'react';

class DateComponent extends Component {
    render() {
        return (
            <div>
                <div className="temperature">26°</div>
                <div className="city">Montpellier</div>
                <div className="description">Sunny</div>
            </div>
        );
    }
}

export default DateComponent;