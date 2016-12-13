import axios from 'axios';
import { Settings } from '../../settings';
import { browserHistory } from 'react-router';

export function setCurrentUser(user) {
  return {
    type:"AUTH_USER",
    user
  }
}

function handleError(err) {
  if(err.response){
    console.log(err.response.data.error)
  }else {
    console.log(err)
  }
}

export function login(data){
  return dispatch => {
  axios.post(`${Settings.host}/auth/login`,data)
      .then(res=>{
        const token = res.data.token ;
        const user = res.data.user.name;
        sessionStorage.setItem('jwtToken',token);
        sessionStorage.setItem('username',JSON.stringify(user));
        dispatch(setCurrentUser(user))
        browserHistory.push(`/`);
        console.log("登陆成功")
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
      console.log(user)
      dispatch(setCurrentUser(user.name));
      console.log(1)
      browserHistory.push(`/`);
      console.log('注册成功了！')
    }).catch(error => {
      handleError(error);
    });
  }
}
