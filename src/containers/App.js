import React from 'react';
import Header from '../components/header/Header';


export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.listenScrollEvent = this.listenScrollEvent.bind(this);
    }

    childrenWithProps() {
        const { children } = this.props;
        return React.Children.map(children, child =>
            React.cloneElement(child));
    }

    listenScrollEvent() {
        console.log('Scroll event detected!');
    }

    render() {
        return (
            <div onScroll={this.listenScrollEvent}>
                {/*<header className="navbar navbar-fixed-top navbar-transparent">*/}
                    {/*<Header />*/}
                {/*</header>*/}
                {this.childrenWithProps()}
            </div>
        );
    }
}