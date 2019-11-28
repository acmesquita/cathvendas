import React from 'react';
import { Provider } from 'react-redux';

import './styles/global.css'

import store from './store'
import Router from './components/Router';


function App() {
  return (
    <Provider store={store}>
      <Router/>
    </Provider>
  );
}

export default App;
