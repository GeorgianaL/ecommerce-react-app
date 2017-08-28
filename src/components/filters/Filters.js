import React from 'react';
import Filter from './Filter';


export default class Filters extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        console.log('filters', this.props);
        return (
        <div className="col-md-3 filters-div">
            <div className="card">
                <div className="header">
                    <h4 className="title">Refine</h4>
                </div>
                <div className="content">
                    <div className="panel-group">
                        <div className="panel panel-default">
                            <Filter title="Designer" data={this.props.brands} cb={this.props.setFilterDesigner} />
                        </div>
                        <div className="panel panel-default">
                            <Filter title="Color" data={this.props.colors} cb={this.props.setFilterColor} />
                        </div>
                        <div className="panel panel-default">
                            <Filter title="Clothing" data={this.props.clothing} cb={this.props.setFilterClothing}/>
                        </div>
                        <div className="panel panel-default">
                            <Select title="Price" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}