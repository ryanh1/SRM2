import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux'

class ListList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: props.lists
    }
  }

  render() {
    return (
      <div>
        <h2>Your lists:</h2>
        {this.props.lists.map(
          (list) => {
            return <div key={list.priority}>{list.priority}. {list.name}</div>
          }
        )}
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    lists: state.lists,
  }
}


export default connect(mapStateToProps)(ListList)
