// Import Required modules.
import React from 'react';
import ReactDOM from 'react-dom';
// Import styles.
import style from './styles/style.css'; 
// Importing components.
import App from './components/app';
import Home from './components/home';

import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import store, { history } from './store';

const router = (
    <Provider store = {store}> 
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
            </Route>
        </Router>
    </Provider>
)

ReactDOM.render(
    router,
    document.getElementById('root')
);