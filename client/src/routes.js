import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from "react-redux";
import store from './redux/store';

import App from './ui/App';
import LogIn from './ui/auth/LogIn';
import SignUp from './ui/auth/SignUp';
import DashBoard from './ui/DashBoard';

import { setCurrentUser } from './redux/actions/authActions';
import { requireAuth } from './redux/actions/authActions';


if (sessionStorage.jwtToken) {
  const user = JSON.parse(sessionStorage.username);
  store.dispatch(setCurrentUser(user));
}

export const renderRoutes = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <Route path='/login' component={LogIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='/dashboard' component={DashBoard} onEnter={requireAuth} />
      </Route>
    </Router>
  </Provider>
);
