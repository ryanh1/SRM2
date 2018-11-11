import { firebase, googleAuthProvider} from '../firebase/firebase';
import {startAddAccount} from './account';

export const login = (uid) => ({
  type: 'LOGIN',
  uid
});

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider).then(
      function(result) {
        // 1. This gives you a Google Access Token. You can use it to access the Google API.
        // var token = result.credential.accessToken;

        // 2. This gives you the signed in user info.
        // var user = result.user;

        // 3. If it's the first log in, add account info to database
        if(result.additionalUserInfo.isNewUser) {
          console.log('Is new user');
          var uid = result.user.uid;
          var account = {
            firstName: result.user.displayName.split(" ")[0],
            lastName: result.user.displayName.split(" ")[1],
            email: result.user.email
          }
          return startAddAccount(result.user.uid, account);
        }
      }
    );


  }
}

export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  }
}
