/**
 * Created by g.lingurariu on 7/7/2017.
 */
import React from 'react';
import Photos from './Photos';
import Details from './Details';

export default class ProductInfo extends React.Component{

    constructor() {
        super();

        const photosData = [
            {
                id         : "slide1",
                imagePath  : "../../../assets/assets/img/product-page1.jpg",
                imageAlt   : "Slide 1 Image"
            },
            {
                id         : "slide2",
                imagePath  : "../../../assets/assets/img/product-page2.jpg",
                imageAlt   : "Slide 2 Image"
            },
            {
                id         : "slide3",
                imagePath  : "../../../assets/assets/img/product-page4.jpg",
                imageAlt   : "Slide 3 Image"
            },
            {
                id         : "slide4",
                imagePath  : "../../../assets/assets/img/product-page5.jpg",
                imageAlt   : "Slide 4 Image"
            }
        ];

        this.state = {
            currentSlide: 0,
            photosData: photosData
        }
    }

    render() {
        return (
            <div className="product-info-place">
                <div className="col-md-6">
                    <Photos photosData={state.photosData} />
                </div>
                <div className="col-md-6">
                    <Details />
                </div>
            </div>
        );
    }
}