import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import LocationsSelectorModal from './LocationsSelectorModal';
import FriendList from './FriendList';
import SearchBox from './SearchBox';
import ListKanban from './ListKanban';
import SearchSection from './SearchSection';



class BottomPanel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchMode: false
    }
  }

  toggleMode = () => {
    this.setState((prevState) => ({searchMode: !prevState.searchMode}));
  }

  render() {
    return (
      <div>

        {/* Header buttons */}
        <div id="Your_friends">
          {this.props.locations.length > 0 ? (
            <div className="container">
              <div className="row justify-content-between mb-4">
                <div className="col-md-1 col-2"><LocationsSelectorModal/></div>
                <div className="col-md-1 col-2">
                  <button
                    className="locations-selector-button"
                    onClick={this.toggleMode}
                  >
                    <i className="material-icons">
                      {this.state.searchMode === true ? 'view_column' : 'search'}
                    </i>
                  </button>
                </div>
                <div className="col-md-8 col-5">
                  {this.state.searchMode === true ? <SearchBox /> : <h3 className="text-center">Your friends</h3>}
                </div>
                <div className="col-md-2 col-3"></div>
              </div>
            </div>
          ) : <div></div>}
        </div>

        {/* Main content */}
        <div>
          {this.state.searchMode === true ? <SearchSection /> : <ListKanban /> }
        </div>
      </div>
    )
  }
}

  const mapStateToProps = (state) => {
    return {
      lists: state.lists,
      locations: state.locations,
      friends: state.friends,
      guides: state.guides
    }
  }

  export default connect(mapStateToProps)(BottomPanel);
