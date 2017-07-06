/**
 * Created by g.lingurariu on 7/5/2017.
 */
import React from 'react';
import { Link } from 'react-router-dom';

export default class FourOhFour extends React.Component{
    render() {
        return (
            <div>
               Sorry, the page you are looking for does not exist!
                <Link to="/"> Go back home </Link>
            </div>
        );
    }
}