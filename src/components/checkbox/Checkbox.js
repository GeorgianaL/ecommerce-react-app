import React from 'react';

export default class Checkbox extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            isChecked: false,
        };
        this.handleCheckbox = this.handleCheckbox.bind(this);
    }

    handleCheckbox() {
        this.setState({
            isChecked: !this.state.isChecked,
        }, () => {
            this.props.cb(this.props.value, this.state.isChecked);
        });
    }

    render() {
        return(
            <div className="filter-item">
                <input
                    type="checkbox"
                    checked={this.state.isChecked}
                    onChange={this.handleCheckbox}
                />
                <label className={this.state.isChecked ? 'checked-item' : ''}>{this.props.value}</label>
            </div>
        );
    }
}