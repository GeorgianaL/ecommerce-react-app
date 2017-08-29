import React from 'react';

export default class Select extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            value: "priceAsc"
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        }, () => {
            this.props.cb(this.state.value);
        });
    }


    render() {
        return (
            <div>
                <div className="panel-heading">
                    <h2 className="panel-title">{this.props.title}</h2>
                </div>
                <div className="panel-collapse collapse in">
                    <div className="panel-body">
                        <div className="select-filter">
                            <select value={this.state.value} onChange={this.handleChange} className="btn dropdown-toggle form-control">
                                <option value="priceAsc">Ascending</option>
                                <option value="priceDesc">Descending</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}