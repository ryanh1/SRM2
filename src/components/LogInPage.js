import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import {amp} from '../amplitude/amplitude';
// import Landing from './Landing';


export const LoginPage = ({ startLogin }) => {
  return (
<<<<<<< HEAD
    <div key="login_button_div">
      {/* <div>
        <Landing />
        </div> */
        /* <div className="text-center center-vertically"> */
      }
=======
    <div>
>>>>>>> master
      <script> amp.logEvent('Viewed LoginPage') </script>
      <script src="//fast.appcues.com/45361.js"></script>
      <title>Buddy</title>
      <div className="text-center" id="button-key">
        <button
          onClick={startLogin}
<<<<<<< HEAD
          className="btn btn-lg btn-dark"
<<<<<<< HEAD
          key="login_button"
=======
=======
          className="btn btn-lg btn-primary"
>>>>>>> master
          id="button_key"
<<<<<<< HEAD
>>>>>>> master
          >Login with Google
=======
        >Login with Google
>>>>>>> master
        </button>
      </div>
    </div>

  )
};



const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage)
