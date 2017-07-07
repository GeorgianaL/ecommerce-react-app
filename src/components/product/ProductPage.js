/**
 * Created by g.lingurariu on 7/7/2017.
 */
import React from 'react';
import ProductInfo from './ProductInfo';

export default class ProductPage extends React.Component{

    render() {
        return (
            <div className="container">
                <div className="product product-page">
                    {/* main info component: photos comp, details comp */}
                    <ProductInfo />

                    {/* related products: can use Section component */}


                    {/*viewed products/recommended products component*/}
                </div>
            </div>
        );
    }
}