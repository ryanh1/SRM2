import React from 'react';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const LogOutButton = ( { startLogout }) => (
  <div className="d-flex flex-column justify-content-center">
    <button
      className="button-link"
      onClick={startLogout}
    >
      Logout
    </button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(LogOutButton);
