/**
 * Created by g.lingurariu on 7/7/2017.
 */
import React from 'react';

import SectionContainer from '../../containers/SectionContainer';

import Filters from '../filters/Filters';
import Checkbox from '../checkbox/Checkbox';


export default class HomePage extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props);
        return (
            <div className="wrapper">
                <div className="parallax filter-black">
                    <div className="parallax-image">
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
                        <Filters data={this.props.brands} cb={this.props.setFilterDesigner} />
                    </details>
                    <details>
                        <summary>Price</summary>
                        <input type="radio" />Ascending
                        <input type="radio" />Descending
                    </details>
                </section>
            </div>
        );
    }
}
