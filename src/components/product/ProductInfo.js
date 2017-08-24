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

        const productDetails = {
            productDescription: "Immaculately crafted in England using wool from esteemed British cloth house Dormeuile, this Kingsman blazer typifies the line's uncompromising luxury. The dashing check, high armholes and trim silhouette exudes timeless elegance. Keep your look modern by wearing it over a cashmere cardigan and add a little flair with a silk pocket square. This item is small to size, take the next size up. Shown here with a Kingman shirt, cardigan, trousers, tie, pocket square, cufflinks and shoes. Designer exclusively for MR PORTER\n",
            sizeAndFit: "Fits small to size",
            details: "85% wool, 15% linen. Dry-clean only",
            deliveryAndReturn: "Find out more about our delivery options Please try items in the comfort of your own home. If you don't like them, or they don't fit, we'll happily collect them from your home or office for free."
        };

        this.state = {
            currentSlide: 0,
            productDetails: productDetails
            // photosData: photosData
        }
    }

    render() {
        return (
            <div className="product-info-place">
                <div className="col-md-6">
                    {/*<Photos photosData={state.photosData} />*/}
                </div>
                <div className="col-md-6">
                    <Details />
                </div>
            </div>
        );
    }
}