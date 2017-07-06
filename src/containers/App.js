import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header/Header';
import Section from '../components/section/Section';


export default class App extends React.Component{

    render() {
        return (
            <div className="app ecommerce">
                <header className="header">
                    <Header />
                </header>
                <main>
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
                    </div>
                </main>
            </div>
        );
    }
}