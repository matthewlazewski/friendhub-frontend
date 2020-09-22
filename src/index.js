import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import userReducer from './reducers/userReducer';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import postsReducer from './reducers/postReducer';
import commentsReducer from './reducers/commentReducer'

const rootReducer = combineReducers({
  userReducer: userReducer,
  postReducer: postsReducer,
  commentReducer: commentsReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))


ReactDOM.render(
  <Provider store={store} >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


