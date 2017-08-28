import React from 'react';
import Checkbox from '../checkbox/Checkbox';

export default class Filter extends React.Component{

    constructor(props) {
        super(props);
        this.handleCheckedValue = this.handleCheckedValue.bind(this);
    }

    handleCheckedValue(value, checked) {
        this.props.cb(value, checked);
    }

    render() {
        return (
            <div>
                <div className="panel-heading">
                    <h2 className="panel-title">{this.props.title}</h2>
                </div>
                <div className="panel-collapse collapse in">
                    <div className="panel-body">
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
                </div>
            </div>
        );
    }
}