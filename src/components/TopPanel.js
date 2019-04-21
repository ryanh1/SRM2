import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import AddFriendPage from './AddFriendPage';
import { startToggleAddFriendMode } from '../actions/modes';


class TopPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addFriendMode: props.addFriendMode
    }
  }

  onCollapseClick = () => {
    this.props.dispatch(startToggleAddFriendMode({addFriendMode: !this.state.addFriendMode}));
    this.setState({addFriendMode: !this.state.addFriendMode});
  }

  render() {
    return (
      <div className="container card-2 pt-4 mb-4">
        <div className="row">
          <div className="col-md-2 col-2">
            <button onClick={this.onCollapseClick} className="locations-selector-button">
              <i className="tiny material-icons">
                {this.state.addFriendMode ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
              </i>
            </button>
          </div>
          <div className="col-md-8 col-9">
            <h3 className="text-center">Add a friend</h3>
          </div>
          <div className="col-md-2 col-1"></div>
        </div>
        <div className="row pt-3 pb-2 center-horrizontally">
          {this.state.addFriendMode ? <AddFriendPage /> : <div></div>}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    addFriendMode: state.modes.addFriendMode,
  }
}

export default connect(mapStateToProps)(TopPanel);
