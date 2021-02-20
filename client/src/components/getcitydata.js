import React, { Component } from 'react';

class CityData extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            aqius: '',
            pollutant: '',
            city: '',
            state: '',
            country: '',
        };
    }
    componentDidMount() {
        const city = this.props.match.params.city
        const state = this.props.match.params.state
        const country = this.props.match.params.country
        
        fetch(`/citydata?city=${city}&state=${state}&country=${country}`)
            .then(res => res.json())
            .then(findResponse => {
                this.setState({
                    data: [findResponse],
                    aqius: [findResponse.data.current.pollution.aqius],
                    pollutant: [findResponse.data.current.pollution.maincn],
                    city: city,
                    state: state,
                    country: country
                })
            });
    }

    render() {
        if (!this.state.data) {
            return <h1>no data</h1>
        }
        if (this.state.pollutant == 'p2') {
            this.setState({pollutant: 'pm2.5'})
        } else if (this.state.pollutant == 'p1') {
            this.setState({pollutant: 'pm10'})
        } else if (this.state.pollutant == 'o3') {
            this.setState({pollutant: 'Ozone O3'})
        } else if (this.state.pollutant == 'n2') {
            this.setState({pollutant: 'Nitrogen dioxide NO2'})
        } else if (this.state.pollutant == 's2') {
            this.setState({pollutant: 'Sulfur dioxide SO2'})
        } else if (this.state.pollutant == 'co') {
            this.setState({pollutant: 'Carbon monoxide CO'})
        }


        if (this.state.aqius <= 50) {
            return (
                <div>
                    <div className="item-container">
                        <h1 className="output-title">The Air Quality Index in {this.state.city}, {this.state.state}, {this.state.country} is: <p className='green-font'>{this.state.aqius}</p></h1>
                    </div>
                    <div className="item-container">
                        <p className="output-paragraph">The air quality here is very good and the air pollution poses little or no risk!</p>
                    </div>
                    <div className="item-container">
                        <p className="output-paragraph">{this.state.city}'s main pollutant is: <p className="shadow-font">{this.state.pollutant}</p></p>
                    </div>
                </div>
            )
        } else if (this.state.aqius > 50 && this.state.aqius <= 100) {
            return (
                <div>
                    <div className="item-container">
                        <h1 className="output-title">The Air Quality Index in {this.state.city}, {this.state.state}, {this.state.country} is: <p className='yellow-font'>{this.state.aqius}</p></h1>
                    </div>
                    <div className="item-container">
                        <p className="output-paragraph">The air quality here is moderate and the air pollution poses little risk!</p>
                    </div>
                    <div className="item-container">
                        <p className="output-paragraph">{this.state.city}'s main pollutant is: <p className="shadow-font">{this.state.pollutant}</p></p>
                    </div>
                </div>
            )
        } else if (this.state.aqius > 100 && this.state.aqius <= 150) {
            return (
                <div>
                    <div className="item-container">
                        <h1 className="output-title">The Air Quality Index in {this.state.city}, {this.state.state}, {this.state.country} is: <p className='orange-font'>{this.state.aqius}</p></h1>
                    </div>
                    <div className="item-container">
                        <p className="output-paragraph">The air quality here is unhealthly for sensitive groups. The general public is not likely to be affected!</p>
                    </div>
                    <div className="item-container">
                        <p className="output-paragraph">{this.state.city}'s main pollutant is: <p className="shadow-font">{this.state.pollutant}</p></p>
                    </div>
                </div>
            )
        } else if (this.state.aqius > 150 && this.state.aqius <= 200) {
            return (
                <div>
                    <div className="item-container">
                        <h1 className="output-title">The Air Quality Index in {this.state.city}, {this.state.state}, {this.state.country} is: <p className='red-font'>{this.state.aqius}</p></h1>
                    </div>
                    <div className="item-container">
                        <p className="output-paragraph">The air quality here is unhealthy for the entire population and sensitive groups are at serious risk of health effects!</p>
                    </div>
                    <div className="item-container">
                        <p className="output-paragraph">{this.state.city}'s main pollutant is: <p className="shadow-font">{this.state.pollutant}</p></p>
                    </div>
                </div>
            )
        } else if (this.state.aqius > 200 && this.state.aqius <= 300) {
            return (
                <div>
                    <div className="item-container">
                        <h1 className="output-title">The Air Quality Index in {this.state.city}, {this.state.state}, {this.state.country} is: <p className='purple-font'>{this.state.aqius}</p></h1>
                    </div>
                    <div className="item-container">
                        <p className="output-paragraph">The air quality here is very unhealthly and the entire population is at risk of serious health effects!</p>
                    </div>
                    <div className="item-container">
                        <p className="output-paragraph">{this.state.city}'s main pollutant is: <p className="shadow-font">{this.state.pollutant}</p></p>
                    </div>
                </div>
            )
        } else if (this.state.aqius > 300) {
            return (
                <div>
                    <div className="item-container">
                        <h1 className="output-title">The Air Quality Index in {this.state.city}, {this.state.state}, {this.state.country} is: <p className='maroon-font'>{this.state.aqius}</p></h1>
                    </div>
                    <div className="item-container">
                        <p className="output-paragraph">The air quality here is hazardous and should be treated with emergency caution. The entire population is likely to be affected!</p>
                    </div>
                    <div className="item-container">
                        <p className="output-paragraph">{this.state.city}'s main pollutant is: <p className="shadow-font">{this.state.pollutant}</p></p>
                    </div>
                </div>
            )
        }

    }
}

export default CityData;