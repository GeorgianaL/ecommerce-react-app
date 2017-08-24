/**
 * Created by g.lingurariu on 7/5/2017.
 */
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import App from './containers/App';
import HomePageContainer from './containers/HomePageContainer';
import ProductPage from './components/product/ProductPage';
import FourOhFour from './containers/FourOhFour';

const MyRouter = () => (
    <BrowserRouter>
        <div>
            <App />
            <Switch>
                <Route exact path="/" component={HomePageContainer} />
                <Route path="/product" component={ProductPage} />
                <Route component={FourOhFour} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default MyRouter;