import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

// this is the way to connect a middleware to a redux store
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    // passing a single prop called store
    // create a store a pass all the differents reducers
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);
