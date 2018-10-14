import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter, {history} from './routers/AppRouter';
import configureStore from './store/configureStore';
import './firebase/firebase';
import setInitialState from './actions/setInitialState';

const store = configureStore();
console.log('src/app.js is running!');
console.log("Redux store state:")
console.log(store.getState());

store.subscribe(() => {
  console.log(store.getState());
});

const template = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

// Render the
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    const output = document.getElementById('app');
    ReactDOM.render(template, output)
    hasRendered = true;
  }
};


store.dispatch(setInitialState()).then(
  () => {
    renderApp();
    console.log('re-rendered DOM');
  }
);
