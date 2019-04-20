import React from 'react';
import { connect } from 'react-redux';

const Landing = () => (
  <div>
    <div>
      <img src="/images/friends.png" />
      <span>Is it hard for you to keep track of all the people you want to meet?</span>
    </div>
    <div>
      <img src="/images/forget.png" />
      <span>Do you forget what you talked about with friends?</span>
    </div>
    <div>
      <img src="/images/meet.png" />
      <span>Do you forget your friends' names?</span>
    </div>
  </div>
);

export default Landing;
