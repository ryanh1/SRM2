import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReactGA from 'react-ga'

import AppRouter, {history} from './routers/AppRouter';
import configureStore from './store/configureStore';
import './styles/styles.scss';
import { firebase } from './firebase/firebase';
import { login, logout } from './actions/auth';
import setInitialState from './actions/setInitialState';
import LoadingPage from './components/LoadingPage';

// Init amplitude
import './amplitude/amplitude';


ReactGA.initialize('UA-131386599-1');

const store = configureStore();
console.log('src/app.js is running!');
console.log("Redux store state:")
console.log(store.getState());

store.subscribe(() => {
  // console.log(store.getState());
});

// const loadingTemplate = (
//   <div>Connecting to database</div>
// );

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

ReactDOM.render(<LoadingPage />, output)


firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // 1. Log in user
    store.dispatch(login(user.uid));
    // 2. Set initial state
    store.dispatch(setInitialState()).then(
      () => {
        renderApp();
        console.log('re-rendered DOM');
      }
    );
    // 3. redirect the user to the home page after login
    if (history.location.pathname === '/login') {
      history.push('/');
    }
    console.log('log in');
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/login');
    console.log('log out');
  }
})
