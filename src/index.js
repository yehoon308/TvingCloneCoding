import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//스토어 : 프로젝트 당 한개만 작성
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './modules';
import ReduxThunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import logger from 'redux-logger';


//스토어담는 변수
const store = createStore(
  rootReducer,
  applyMiddleware(ReduxThunk, logger)
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

reportWebVitals();
