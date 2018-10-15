import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const ConfirmModal = (props) => (
  <Modal
    isOpen={props.modalOpen}
    onRequestClose={() => {props.modalOpen = false}}
    closeTimeoutMS={200}
    contentLabel={'Confirm'}
  >
    {console.log('Inside Confirm Modal. ','props.modalOpen = ', props.modalOpen)}
    <div>Are you sure you want to {props.command}?</div>
    <button onClick={props.onClick}>Yes</button>
    <button onClick={() => {props.modalOpen = false}}>No</button>
  </Modal>
)

export default ConfirmModal;
