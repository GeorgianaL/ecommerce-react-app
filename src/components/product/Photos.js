/**
 * Created by g.lingurariu on 7/7/2017.
 */
import React from 'react';
import Photo from './Photo';

export default class Photos extends React.Component{
    render() {
        const slidesNodes = this.props.data.map(function (slideNode, index) {
            let isActive = state.currentSlide === index;
            return (
                <Photo
                    active={isActive}
                    key={slideNode.id}
                    imagePath={slideNode.imagePath}
                    imageAlt={slideNode.imageAlt}
                />
            );
        });
        return (
            <div className="photos-place">
                {slidesNodes}
            </div>
        );
    }
}