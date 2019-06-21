import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, withRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import trip from './Container/CreateTrip/reducer'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import history from './Utils/history'

const store = createStore(trip)

class AppContainer extends React.Component {
    render() {
       return (
        <Provider store={store}>
            <Router history={history}>
                    <App />
            </Router>
        </Provider>
       )
    }
}

ReactDOM.render(<AppContainer />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
