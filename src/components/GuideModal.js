import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import {startIncrementGuide} from '../actions/guides';


class GuideModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: props.modalOpen
    }
  }

  onOkButtonClick = () => {
    this.props.dispatch(startIncrementGuide());
    this.setState({modalOpen: false})
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.onOkButtonClick}
          closeTimeoutMS={200}
          contentLabel={'Confirm'}
          ariaHideApp={false}
          className="bg-light custom-modal modal__medium-modal border border-dark rounded card-4 pb-4"
        >
          <div className="pl-3 pr-3">{this.props.message}</div>
          <div className="mt-3">
            <button className="btn btn-primary mr-3" onClick={this.onOkButtonClick}>Ok</button>
          </div>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends,
  }
}

export default connect(mapStateToProps)(GuideModal);
