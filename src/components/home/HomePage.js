/**
 * Created by g.lingurariu on 7/7/2017.
 */
import React from 'react';

import SectionContainer from '../../containers/SectionContainer';

import Filters from '../filters/Filters';


export default class HomePage extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.priceAsc);
        return (
            <div className="wrapper">
                <div className="parallax">
                    <div className="img-responsive parallax-image">
                        <img src="../../assets/assets/img/ecommerce.jpg" />
                    </div>
                    <div className="small-info">
                        <h1>Brace yourself!</h1>
                        <h3>25% Off and Free global delivery for all products</h3>
                    </div>
                </div>
                <section className="container">
                    <SectionContainer sectionTitle="Latest Offers" />
                    <details>
                        <summary>Designer</summary>
                        <Filters data={this.props.brands} />
                    </details>
                </section>
            </div>
        );
    }
}
