import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class States extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
        };
    }
    
    componentDidMount() {
        const params = this.props.match.params.name
        fetch(`/states?name=${params}`)
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

        const params = this.props.match.params.name

        return (
            <div>  
                {this.state.data.map((item) =>
                    <div key={item.status}>
                        {item.data.map((sub) => 
                            <div className="item-container" key={sub.state}>
                                <div >
                                    <Link to={`/getcities/${sub.state}/${params}`} className="link">{sub.state}</Link>
                                </div>
                            </div>
                        )}
                    </div> 
                )}    
            </div>  
        )
    }
}
export default States;