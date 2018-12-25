import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
// import Landing from './Landing';


export const LoginPage = ({ startLogin }) => {
  return (
    <div>
      {/* <div>
        <Landing />
      </div> */
      /* <div className="text-center center-vertically"> */
    }
      <title>Buddy</title>
      <div className="text-center" id="button-key">
        <button
          onClick={startLogin}
          className="btn btn-lg btn-dark"
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
