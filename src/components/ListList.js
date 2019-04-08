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
      <div className="d-flex justify-content-center">
        <div className="list-list card-2 p-5">
          <h2>Your lists</h2>
          {this.props.lists.map(
            (list) => {
              return <div className="text-justify" key={list.priority}>{list.priority}. {list.name}</div>
            }
          )}
        </div>
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
