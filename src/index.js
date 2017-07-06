import React from 'react';
import { render } from 'react-dom';

import Router from './Router';
import App from './containers/App';

import '../assets/css/mycss.css';

// import 'bootstrap/dist/css/bootstrap.min.css';

import '../assets/assets/css/demo.css';
import '../assets/assets/css/gsdk.css';

render(<Router />, document.getElementById('root'));