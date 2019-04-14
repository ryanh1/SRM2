import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

import separateMiddle from '../selectors/separateMiddle';

const SearchResultEvent = (props) => (
  <div className="m-2">
    <div className="text-secondary">
      <span>
        <span>{separateMiddle(props.event.note, props.searchText,30,30)[0]}</span>
        <span>{separateMiddle(props.event.note, props.searchText,30,30)[1]}</span>
        <span><b>{separateMiddle(props.event.note, props.searchText,30,30)[2]}</b></span>
        <span>{separateMiddle(props.event.note, props.searchText,30,30)[3]}</span>
        <span>{separateMiddle(props.event.note, props.searchText,30,30)[4]}</span>
      </span>
    </div>
  </div>
);

export default SearchResultEvent;
