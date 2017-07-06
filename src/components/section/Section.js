/**
 * Created by g.lingurariu on 7/5/2017.
 */
// should have a title, and 3 section item components

import React from 'react';
import PropTypes from 'prop-types';

import SectionItem from "../section-item/SectionItem";

export default class Section extends React.Component{

    constructor(props) {

        const products = [
            {
                "id": 1,
                "imageUrl": "../../../assets/assets/img/ecommerce5.jpg",
                "name": "Gucci",
                "text": "Beautifully tailored from rich burgundy velvet, this impeccable piece has lustrous black satin lining and smart satin-covered buttons.",
                "price": "€1,930"
            },
            {
                "id": 2,
                "imageUrl": "../../../assets/assets/img/ecommerce6.jpg",
                "name": "Cannali",
                "text": "The structured shoulders and sleek detailing ensure a sharp silhouette. Team it with a silk pocket square and leather loafers.",
                "price": "€1,430"
            },
            {
                "id": 3,
                "imageUrl": "../../../assets/assets/img/ecommerce7.jpg",
                "name": "Cannali",
                "text": "The smooth woven-wool is water resistant to ensure you stay pristine after a long-haul flight. Cut in a trim yet comfortable regular fit.",
                "price": "€1,299"
            }
        ];

        super(props);
        // const { sectionTitle } = this.props;
        this.state = {products: JSON.parse(JSON.stringify(products))};
    }

    render() {

        const cards = this.state.products.map(product =>
            <SectionItem
                key={product.id}
                imageUrl={product.imageUrl}
                name={product.name}
                text={product.text}
                price={product.price}
            />

        )

        return (
            <div>
                {/*<h4>{props.sectionTitle}</h4>*/}
                <div className="cardsDiv">
                    {cards}
                </div>
            </div>
        );
    }
}