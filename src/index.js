import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import MyRouter from './Router';
import { productReducer } from './reducers/products.reducer';

import '../assets/css/mycss.css';
import '../assets/assets/css/demo.css';
import '../assets/assets/css/gsdk.css';

const rootReducer = combineReducers({
    products: productReducer
});

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

const Main = () => {
    return (
        <Provider store={store}>
            <MyRouter />
        </Provider>
    )
};

render(<Main />, document.getElementById('root'));