/**
 * Created by g.lingurariu on 7/5/2017.
 */
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import App from './components/home/HomePage';
import ProductPage from './components/product/ProductPage';
import FourOhFour from './containers/FourOhFour';


// renders the first child <Route> that matches

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/product" component={ProductPage} />
            <Route component={FourOhFour}/>
        </Switch>
    </BrowserRouter>
)

export default Router;