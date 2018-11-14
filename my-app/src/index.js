import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import {BrowserRouter} from 'react-router-dom'

import * as serviceWorker from './serviceWorker';

//o que o React faz por baixo dos panos
// const props = {
//     id='email'
//     children='Emai

// }
// Label(props);




ReactDOM.render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
