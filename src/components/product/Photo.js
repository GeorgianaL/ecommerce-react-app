/**
 * Created by g.lingurariu on 7/7/2017.
 */
import React from 'react';

export default class Photo extends React.Component{
    render() {
        return (
            <div>
                <img src={this.props.imagePath} alt={this.props.imageAlt} />
            </div>
        );
    }
}