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

const loadingTemplate = (
  <div>Connecting to database</div>
);

const actualTemplate = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

// Render the template to the DOM
let hasRendered = false;
const output = document.getElementById('app');
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(actualTemplate, output)
    hasRendered = true;
  }
};

ReactDOM.render(loadingTemplate, output)
store.dispatch(setInitialState()).then(
  () => {
    renderApp();
    console.log('re-rendered DOM');
  }
);
