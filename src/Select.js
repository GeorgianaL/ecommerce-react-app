import React from 'react';

export default class Select extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            value: "asc"
        };
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    render() {
        return (
            <div className="select-filter">
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </div>
        );
    }
}