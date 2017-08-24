import React from 'react';
import Checkbox from '../checkbox/Checkbox';

export default class Filters extends React.Component{

    constructor(props) {
        super(props);
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