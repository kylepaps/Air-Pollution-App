import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Home extends Component {
    render() {
        return (
            <div>
                <div className="item-container">
                    <Link to='/getcountry' className="title">Available Countries</Link>
                </div>
                <div>
                    <p className="output-paragraph">This application is used to find the risk of air pollution levels in your city based on the Air Quality Index as measured by the United States</p>
                    <p className="output-paragraph">The Air Quality Index is measured from 0 - 500 and divided into levels of health concern. These levels include: </p>
                </div>
                <p className="shadow-font2">Good: <h1 className="green-font2">0 - 50</h1></p>
                <p className="shadow-font2">Moderate: <h1 className="yellow-font2">51 - 100</h1></p>
                <p className="shadow-font2">Unhealthy for Sensitive Groups: <h1 className="orange-font2">101 - 150</h1></p>
                <p className="shadow-font2">Unhealthy: <h1 className="red-font2">151 - 200</h1></p>
                <p className="shadow-font2">Very Unhealthy: <h1 className="purple-font2">201 - 300</h1></p>
                <p className="shadow-font2">hazardous: <h1 className="maroon-font2">301 - 500</h1></p>
                <footer className="output-paragraph">Click Available Countries to get started!</footer>   
            </div>
        )
    }
}
export default Home;
