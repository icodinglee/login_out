import React from 'react';
import { Router, Route, browserHistory,IndexRoute } from 'react-router';
import { Provider } from "react-redux";
import store from './redux/store';

import App from './ui/App';
import Home from './ui/Home';
import LogIn from './ui/auth/LogIn';
import SignUp from './ui/auth/SignUp';
import DashBoard from './ui/DashBoard';
import NewPost from './ui/posts/NewPost';
import ShowPost from './ui/posts/ShowPost';
import EditPost from './ui/posts/EditPost';

import { setCurrentUser } from './redux/actions/authActions';
import { requireAuth } from './redux/actions/authActions';


if (sessionStorage.jwtToken) {
  const user = JSON.parse(sessionStorage.user);
  store.dispatch(setCurrentUser(user.name));
}

export const renderRoutes = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='/login' component={LogIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='/dashboard' component={DashBoard} onEnter={requireAuth} />
        <Route path='/posts/new' component={NewPost} onEnter={requireAuth} />
        <Route path='/posts/:post_id' component={ShowPost} />
        <Route path='/posts/:post_id/edit' component={EditPost} onEnter={requireAuth}/>
      </Route>
    </Router>
  </Provider>
);
