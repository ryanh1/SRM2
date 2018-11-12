import * as firebase from 'firebase';
import {firebaseConfiguration} from '../private';

// Initialize Firebase

// Download the config from the firebase website.

const firebaseConfig = firebaseConfiguration;

var config = firebaseConfig;
console.log('Configuring firebase');
firebase.initializeApp(config);

const database = firebase.database();

// Implement authentication
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

// Test firebase
// firebase.database().ref('test').set('This is a test').then(
//   () => {console.log('Wrote to database')}
// ).catch(
//   (e) => {console.log('Error fetching data: ', e)}
// );

export {firebase, googleAuthProvider, database as default};
