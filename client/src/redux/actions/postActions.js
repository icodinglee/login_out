import axios from 'axios';
import { browserHistory } from 'react-router';
import { Settings } from '../../settings';

function handleError(error) {
  if (error.response) {
    console.log(error.response.data.error);
  } else {
    console.log(error);
  }
}

export function newPost(data) {
  let formData = new FormData();
  formData.append('name', data.name);
  formData.append('content', data.content);
  formData.append('post', data.file);
  return function(dispatch) {
    axios.post(`${Settings.host}/posts`, formData, {
      headers: {'Authorization': sessionStorage.getItem('jwtToken')}
    }).then(response => {
      dispatch({ type: 'ADD_POST', post: response.data.post })
      browserHistory.push('/dashboard');
      console.log(response.data.message)
    }).catch(error => {
      handleError(error);
    });
  }
}

export function fetchPosts() {
  return (dispatch) => {
    axios.get(`${Settings.host}/posts`).then(response => {
      dispatch({ type: 'LOAD_POSTS', posts: response.data.posts });
    }).catch(error => {
      handleError(error);
    });
  }
}

export function getPost(id) {
  return (dispatch) => {
    axios.get(`${Settings.host}/posts/${id}`).then(response => {
      dispatch({ type: 'LOAD_POST', post: response.data.post });
    }).catch(error => {
      handleError(error);
    });
  }
}

export function clearPost() {
  return { type: 'CLEAR_POST' };
}

export function editPost(data, id) {
  let formData = new FormData();
  formData.append('name', data.name);
  formData.append('content', data.content);
  formData.append('post', data.file);
  return function(dispatch) {
    axios.put(`${Settings.host}/posts/${id}`, formData, {
      headers: {'Authorization': sessionStorage.getItem('jwtToken')}
    }).then(response => {
      dispatch({ type: 'EDIT_POST', post: response.data.post })
      browserHistory.push('/dashboard');
      console.log(response.data.message)
    }).catch(error => {
      handleError(error);
    });
  }
}

export function deletePost(id) {
  return function(dispatch) {
    axios.delete(`${Settings.host}/posts/${id}`, {
      headers: {'Authorization': sessionStorage.getItem('jwtToken')}
    }).then(response => {
      dispatch({ type: 'DELETE_POST', id: response.data.id })
      browserHistory.push('/dashboard');
      //console.log(response.data.message)
    }).catch(error => {
      handleError(error);
    });
  }
}
