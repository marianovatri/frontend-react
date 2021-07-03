import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'
import {Provider} from 'react-redux';
 //esta funcion adapta el store

  const initialState = {

    appName : "Rooftop - React - Redux",
    searching: false,
    posts: [],
  }
  const store = createStore(function (state = initialState, action) {
    switch (action.type) {


    case "SEARCH_POSTS" :
    return  {...state, searching : true}

    case "SEARCH_POSTS_WITH-TEXT" :
       let results = state.posts.Reactfilter(post => post.title.includes(action.payload))

    return {...state, posts : results}

    case "GET_POSTS":
      return {...state, posts : action,payload}
    }

    return state
  })



ReactDOM.render(
  <React.StrictMode>
    <Provider store= {store}>

        <App />
        </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//primero crear una store
//Redux.createStore()