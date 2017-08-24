/**
 * Created by g.lingurariu on 7/7/2017.
 */
import React from 'react';

export default class ProductInfo extends React.Component{
    render() {
        const {productDescription, sizeAndFit, details, deliveryAndReturn} = this.props;
        return (
            <div className="details-place">
                <div>
                    <h3>brand name</h3>
                    <p>short description</p>
                    <p>price</p>
                </div>
                <div>
                    <details>
                        <summary>Product Description</summary>
                        <p>{productDescription}</p>
                    </details>
                    <details>
                        <summary>Size & Fit</summary>
                    </details>
                    <details>
                        <summary>Details</summary>
                        <p>{details}</p>
                    </details>
                    <details>
                        <summary>Delivery & Return</summary>
                    </details>
                </div>
            </div>
        );
    }
}