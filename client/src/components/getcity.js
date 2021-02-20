import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Cities extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        const state = this.props.match.params.state
        const country = this.props.match.params.country

        fetch(`/cities?state=${state}&country=${country}`)
            .then(res => res.json())
            .then(findResponse => {
                this.setState({
                    data: [findResponse],
                })
            });
    }

    render() {
        if (!this.state.data) {
            return <h1>no data</h1>
        }
        const state = this.props.match.params.state
        const country = this.props.match.params.country

        return (
            <div>  
                {this.state.data.map((item) =>
                    <div key={item.status}>
                        {item.data.map((sub) => 
                            <div className="item-container" key={sub.city}>
                                <div >
                                    <Link to={`/getcitydata/${sub.city}/${state}/${country}`} className="link">{sub.city}</Link>
                                </div>
                            </div>
                        )}
                    </div> 
                )}    
            </div>          
        )
    }
}

export default Cities;