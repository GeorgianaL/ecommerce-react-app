import React from 'react';
import Header from '../components/header/Header';


export default class App extends React.Component{
    constructor(props) {
        super(props);
    }

    childrenWithProps() {
        const { children } = this.props;
        return React.Children.map(children, child =>
            React.cloneElement(child));
    }

    render() {
        return (
            <div className="app ecommerce">
                <header className="header">
                    <Header />
                </header>
                <main>
                    {this.childrenWithProps()}
                </main>
            </div>
        );
    }
}