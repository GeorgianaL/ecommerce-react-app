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
            console.log(this.props.value, this.state.isChecked);
        });
    }

    render() {
        return(
            <div>
                <input
                    type="checkbox"
                    checked={this.state.isChecked}
                    onChange={this.handleCheckbox}
                />
                <label>{this.props.value}</label>
            </div>
        );
    }
}