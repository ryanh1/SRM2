import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import {amp} from '../amplitude/amplitude';
// import Landing from './Landing';


export const LoginPage = ({ startLogin }) => {
  return (
    <div>
      <script> amp.logEvent('Viewed LoginPage') </script>
      <script src="//fast.appcues.com/45361.js"></script>
      <title>Buddy</title>
      <div className="text-center" id="button-key">
        <button
          onClick={startLogin}
          className="btn btn-lg btn-primary card-1"
          id="button_key"
        >Login with Google
        </button>
      </div>
    </div>

  )
};



const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage)
