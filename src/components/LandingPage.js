import React from 'react';
import ReactDOM from 'react-dom';

import LogInPage from './LogInPage';

const LandingPage = () => (
  <div className="mb-5 mt-5">
    <div className="text-center mt-5 mb-5" key="Title">
      <h1 className="mt-5">Buddy</h1>
      <div className="mb-5">Your assistant for relationships and networking</div>
      <LogInPage className="mb-5 mt-5"/>
    </div>

    <div key="Problem" className="text-center center-horrizontally">
      <div className="d-flex">
        <div className="pr-4 pl-4">
          <img className="landing-page__icon" src="/images/maintain_friendships.png" />
          <div>Maintain friendships</div>
        </div>
        <div className="pr-4 pl-4">
          <img className="landing-page__icon" src="/images/personal_care.png" />
          <div>Build deeper relationships</div>
        </div>
        <div className="pr-4 pl-4">
          <img className="landing-page__icon" src="/images/structure.png" />
          <div>Meet the right people</div>
        </div>
      </div>
    </div>
  </div>
)

export default LandingPage;
