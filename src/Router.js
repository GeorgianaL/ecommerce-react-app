/**
 * Created by g.lingurariu on 7/5/2017.
 */
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import App from './containers/App';
import FourOhFour from './containers/FourOhFour';


// renders the first child <Route> that matches

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route component={FourOhFour}/>
        </Switch>
    </BrowserRouter>
)

export default Router;