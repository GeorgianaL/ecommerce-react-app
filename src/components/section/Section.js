/**
 * Created by g.lingurariu on 7/5/2017.
 */
// should have a title, and 3 section item components

import React from 'react';

import SectionItem from "../section-item/SectionItem";

export default class Section extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        const cards = this.props.products.map(product =>
            <SectionItem
                key={product.id}
                imageUrl={product.imageUrl}
                name={product.brandName}
                text={product.text}
                price={product.price}
                oldPrice={product.oldPrice}
            />

        );
        return (
            <div className="products-section col-md-9">
                <div className="section-title">
                    <h2>{this.props.sectionTitle}</h2>
                </div><br/>
                <div className="cards-div flex-row row">
                    {cards}
                </div>
            </div>
        );
    }
}