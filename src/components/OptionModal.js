import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) =>{
    return(
        <Modal 
        isOpen={!!props.selectedOption}
        contentLable="Selected Option"
        ariaHideApp={false}
        closeTimeoutMS={110}
        onRequestClose={props.handleClearSelectedOption}
        className="modal"
        >
            <h3 className="modal__title">Selected Option</h3>
            {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
            <button className="button" onClick={props.handleClearSelectedOption}>Ok</button>
        </Modal>
    )

};

export default OptionModal;