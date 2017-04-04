import React, { Component } from 'react';
import PrevisionDetailComponent from './Prevision-detail/Prevision-detail.component';
import './Prevision.component.css';

class PrevisionComponent extends Component {
    constructor(){
        super()
        this.state = {
            selectedTab: "today"
        }
        this.handleSwichedTab = this.handleSwichedTab.bind(this)
    }
    handleSwichedTab(newTab){
        this.setState({
            selectedTab: newTab
        })
    }
    render() {
        return (
            <div className="prevision-container">
                <div className="prevision-header">
                    <span className="title" onClick={() => {this.handleSwichedTab("today")}}>Today</span>
                    <span className="title" onClick={() => {this.handleSwichedTab("week")}}>Week</span>
                    <span className="title" onClick={() => {this.handleSwichedTab("month")}}>Month</span>
                </div>
                <div className="separation"></div>
                <div className={"tab-selected "+ this.state.selectedTab +"-selected"}></div>
                <PrevisionDetailComponent tab={this.state.selectedTab}/>
            </div>
        );
    }
}

export default PrevisionComponent;