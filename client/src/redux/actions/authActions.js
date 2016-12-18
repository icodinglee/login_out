import axios from 'axios';
import { Settings } from '../../settings';
import { browserHistory } from 'react-router';
import { AlertError,AlertSuccess } from '../../shared/Alert';

export function setCurrentUser(user) {
  return {
    type:"AUTH_USER",
    user
  }
}

function handleError(err) {
  if(err.response){
    AlertError(err.response.data.error)
  }else {
    console.log(err)
  }
}

export function login(data){
  return dispatch => {
  axios.post(`${Settings.host}/auth/login`,data)
      .then(res=>{
        const token = res.data.token ;
        const user = res.data.user;
        sessionStorage.setItem('jwtToken',token);
        sessionStorage.setItem('user',JSON.stringify(user));
        dispatch(setCurrentUser(user))
        user.admin === true ? browserHistory.push(`/dashboard`) : browserHistory.push(`/`);
        AlertSuccess("登陆成功")
      })
      .catch(err => {
          handleError(err)
      })
  }
}

export function logout() {
  return dispatch => {
    sessionStorage.removeItem('jwtToken');
    sessionStorage.removeItem('user');
    dispatch(setCurrentUser({}));
    browserHistory.push(`/`);
  }
}


export function signup(data) {
  return dispatch => {
    axios.post(`${Settings.host}/auth/signup`, data).then(response => {
      const token = response.data.token;
      const user = response.data.user;
      sessionStorage.setItem('jwtToken', token);
      sessionStorage.setItem('user', JSON.stringify(user));
      dispatch(setCurrentUser(user));
      browserHistory.push('/');
      AlertSuccess('注册成功了！')
    }).catch(error => {
      handleError(error);
    });
  }
}


export function requireAuth(nextState, replace) {
  if (!isAdmin()) {
    replace('/login')
  }
}

 function isAdmin() {
  if (!sessionStorage.getItem('jwtToken') && !sessionStorage.getItem('user')) return false;
  const user = JSON.parse(sessionStorage.user);
  return user.admin === true ? true : false
}
