import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import reducers from './reducers';

ReactDOM.render(
    // passing a single prop called store
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>
    , document.getElementById('root')
);