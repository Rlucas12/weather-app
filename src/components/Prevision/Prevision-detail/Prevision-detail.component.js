import React, { Component } from 'react';
import PrevisionLineComponent from './../Prevision-line/Prevision-line.component';
import './Prevision-detail.component.css';

class PrevisionDetailComponent extends Component {
    render() {
        let line_number = 0
        switch (this.props.tab) {
            case "today":
                line_number = 3
                break;

            case "week":
                line_number = 7
                break;

            case "month":
                line_number = 10
                break;
        
            default:
                line_number = 3
                break;
        }
        return (
            <div className="prevision-detail-container">
                {Array(line_number).fill(line_number).map((el, i) => {
                    return <PrevisionLineComponent time="13h00" description="Partly cloudy" temperature="28°C" key={i}/>
                })}
            </div>
        );
    }
}

export default PrevisionDetailComponent;