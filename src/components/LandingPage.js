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

    {/* <h2 className="text-center mt-5 baige-background mb-5">_</h2>
    <h2 className="text-center mt-3 mb-3">Buddy enables you to...</h2> */}
    <div key="Problem" className="text-center center-horrizontally">
      <div className="d-flex">
        <div className="pr-4 pl-4">
          <img className="noun-image" src="/images/maintain_friendships.png" />
          <div>Maintain friendships</div>
        </div>
        <div className="pr-4 pl-4">
          <img className="noun-image" src="/images/personal_care.png" />
          <div>Build deeper relationships</div>
        </div>
        <div className="pr-4 pl-4">
          <img className="noun-image" src="/images/structure.png" />
          <div>Meet the right people</div>
        </div>
      </div>
    </div>

    {/* <h2 className="text-center baige-background mt-5 mb-5">_</h2>
    <h2 className="text-center mt-3 mb-3">How to use Buddy?</h2>
    <div key="Solution" className="text-center center-horrizontally mb-3">
      <div className="d-flex">
        <div className="pr-2 pl-2">
          <img className="pb-2 noun-image" src="/images/phone1.png" />
          <div className="noun-text">When you meet a new friend, save them to your records.</div>
        </div>
        <div className="pr-2 pl-2">
          <img className="pb-2 noun-image" src="/images/family.png" />
          <div className="noun-text">Write notes, such as their family's names and what you talked about.</div>
        </div>
        <div className="pr-2 pl-2">
          <img className="pb-2 noun-image" src="/images/phone2.png" />
          <div className="noun-text">Before you see them again, review your notes.</div>
        </div>
        <div className="pr-2 pl-2">
          <img className="pb-2 noun-image" src="/images/birthday_card.png" />
          <div className="noun-text">Keep "to dos", such as to send a birthday card.</div>
        </div>
      </div>
    </div>

    <LogInPage className="mb5"/>  */}
  </div>
)

export default LandingPage;
