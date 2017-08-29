/**
 * Created by g.lingurariu on 7/5/2017.
 */
import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component{
    render() {
        return (
            <nav className="navbar navbar-fixed-top navbar-transparent">
                <div className="container">
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="">Home</a></li>
                            <li><a href="">Products</a></li>
                            <li><a href="">Login</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}