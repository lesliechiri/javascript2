import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const myGreensKiosk = (
    <div>
        <h1>GREENS KIOSK</h1>
        <p>PRODUCTS</p>
        <p>VEGETABLES</p>
        <p>FRUITS</p>
    </div>
    )
    

ReactDOM.render(
    myGreensKiosk, document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
