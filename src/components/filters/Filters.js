import React from 'react';
import Checkbox from '../checkbox/Checkbox';

export default class Filters extends React.Component{

    constructor(props) {
        super(props);
        this.handleCheckedValue = this.handleCheckedValue.bind(this);
    }

    handleCheckedValue(value, checked) {
        console.log(this.props);
        this.props.cb(value, checked);
    }

    render() {
        return (
            <div className="col-md-4">
                <ul className="brand-filter">
                    {
                        this.props.data.map((item, index) => {
                            return(
                                <li key={`${item}-${index}`}>
                                    <Checkbox
                                        value={item}
                                        label={item}
                                        cb={this.handleCheckedValue}
                                    />
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}