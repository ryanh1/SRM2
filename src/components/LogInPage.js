import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => {
  return (
      <div className="text-center center-vertically">
        <button
          onClick={startLogin}
          className="btn btn-lg btn-dark mb-5"
          >Login with Google
        </button>
      </div>
  )
};



const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage)
