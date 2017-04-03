import React, { Component } from 'react';
import CityComponent from '../City/City.component';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Weather app</h1>
                <CityComponent />
            </div>
        );
    }
}

export default Home;