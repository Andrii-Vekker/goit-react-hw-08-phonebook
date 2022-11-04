import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import ReactDOM from 'react-dom/client';
import App from 'components/App/App';
import './index.css';
import {GlobalStyles} from "./components/App/GlobalStyles"
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles/>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
