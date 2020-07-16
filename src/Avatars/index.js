import React from 'react';
import './style.css';
import WordGenerator from './random.js';
import Modal from './Modal';

let uniqId = 0;
export default class AvatarApi extends React.Component {
    state = {show: false}; 
    showModal = () => {
        this.setState({show: !this.state.show});
    };
    render() {
        uniqId++;
        let size = 250;
        let image = `https://api.adorable.io/avatars/` + size + `/` + uniqId + `@adorable.png`;
        let modalId = "modle" + uniqId;
        return (
            <div className="avatar">
                <Modal className="modal" id={modalId} onClose={this.showModal} show={this.state.show}>
                        <img className="modal-content" src={image} alt="Adorable API" id={uniqId}/>
                        <div id="caption">yo yo yo</div>
                </Modal>
                <img src={image} alt="Adorable API" id={uniqId} onClick={() => this.showModal()}/>
                <h2><WordGenerator/></h2>
                
            </div>
        );
    }
}
