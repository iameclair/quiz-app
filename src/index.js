import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import App from './components/App';

import {store} from "./reducers/store";
import ErrorBoundary from "./components/ErrorBoundary";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Report from "./components/Report";


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                    <Route path="/" exact component={App}/>
                <ErrorBoundary>
                    <Route path="/report" component={Report}/>
                </ErrorBoundary>
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root')
);
