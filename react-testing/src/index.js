import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import './index.css';
import { BrowserRouter as Router} from 'react-router-dom';
import { legacy_createStore as createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './redux/reducer'
const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore( reducer )
root.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
);

