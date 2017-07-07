/**
 * Created by g.lingurariu on 7/7/2017.
 */
import React from 'react';
import { Link } from 'react-router-dom';

import Section from '../section/Section';
import ProductPage from '../product/ProductPage';

export default class HomePage extends React.Component{

    render() {
        return (
            <div className="app ecommerce">
                    <div className="wrapper">
                        <div className="parallax">
                            <div className="img-responsive parallax-image">
                                {/*<img src="../../assets/assets/img/ecommerce.jpg" />*/}
                            </div>
                            <div className="small-info">
                                <h1>Brace yourself!</h1>
                                <h3>25% Off and Free global delivery for all products</h3>
                            </div>
                        </div>

                        <section className="container">
                            <Section sectionTitle="Latest Offers" />
                        </section>
                        <Link to="/product">click!!!</Link>
                    </div>
            </div>
        );
    }
}