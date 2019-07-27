import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) =>{
    return(
        <Modal 
        isOpen={!!props.selectedOption}
        contentLable="Selected Option"
        ariaHideApp={false}
        onRequestClose={props.handleClearSelectedOption}
        >
            <h3>Selected Option</h3>
            {props.selectedOption && <p>{props.selectedOption}</p>}
            <button onClick={props.handleClearSelectedOption}>Ok</button>
        </Modal>
    )

};

export default OptionModal;