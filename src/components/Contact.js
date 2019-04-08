import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

const Contact = (props) => (
  <div>
    <div className="container card-2 p-3 mt-4">
      <div>
        <h1 className="text-center">Contact us</h1>
      </div>
      <form action="https://formspree.io/ryan.s.hollander@gmail.com" method="POST">
        <div className="center-horrizontally m-3 form-group">
          <span className="form-control border-0 col-1">Email: </span>
          <input
            type="text"
            key="email"
            name="email"
            value={props.account.email}
            placeholder={props.account.email}
            disabled={true}
            size="69"
            className="form-control"
          />

        </div>
        <div className="center-horrizontally m-3 form-group">
          <textarea
            type="text"
            key="message"
            name={props.account.email}
            placeholder="Your message"
            size="75"
            height="75"
            rows={3}
            className="form-control"
          />
        </div>
        <div className="center-horrizontally m-3">
          <button className="btn btn-primary" type="submit" value="Send">Send</button>
        </div>
      </form>
    </div>
  </div>
)

const mapStateToProps = (state, props) => {
    return {
      account: state.account
    };
};


export default connect(mapStateToProps)(Contact);
