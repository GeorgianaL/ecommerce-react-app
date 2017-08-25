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
            <div>
                <header className="navbar navbar-fixed-top navbar-transparent">
                    <Header />
                </header>
                {this.childrenWithProps()}
            </div>
        );
    }
}