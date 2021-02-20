import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Countries extends Component {
    constructor() {
        super();
        this.state = {
            data: [],        
        };
    }
    
    componentDidMount() {
        fetch('/countries')
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

        return (
            <div>  
                {this.state.data.map((item) =>
                    <div key={item.status}>
                        {item.data.map((sub) => 
                            <div className="item-container" key={sub.country}>
                                <div >
                                    <Link to={`/getstates/${sub.country}`} className="link">{sub.country}</Link>
                                </div>
                            </div>
                        )}
                    </div> 
                )}    
            </div>
        )
    }
}
export default Countries;