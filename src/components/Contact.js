import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

const Contact = (props) => (
  <div>
    <div>
      <h1 className="text-center">Contact us</h1>
    </div>
    <form action="https://formspree.io/ryan.s.hollander@gmail.com" method="POST">
      <div className="center-horrizontally m-3">
      <span className="mt-1 mr-1">Email: </span>
        <input
          type="text"
          key="email"
          name="email"
          value={props.account.email}
          placeholder={props.account.email}
          disabled={true}
          size="69"
        />

      </div>
      <div className="center-horrizontally m-3">
        <input
          type="text"
          key="message"
          name={props.account.email}
          placeholder="Your message"
          size="75"
          height="75"
        />
      </div>
      <div className="center-horrizontally m-3">
        <button type="submit" value="Send">Send</button>
      </div>
    </form>
  </div>
)

const mapStateToProps = (state, props) => {
    return {
      account: state.account
    };
};


export default connect(mapStateToProps)(Contact);
