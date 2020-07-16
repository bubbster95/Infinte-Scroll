import React from 'react';
import './style.css';
import WordGenerator from './random.js';

let uniqId = 0;
export default class AvatarApi extends React.Component {
    render() {
        uniqId++;
        let size = 250;
        let image = `https://api.adorable.io/avatars/` + size + `/` + uniqId + `@adorable.png`;
        let modalId = "modle" + uniqId;
        return (
            <div className="avatar">
                <img src={image} alt="Adorable API" id={uniqId}/>
                <h2><WordGenerator/></h2>
            </div>
        );
    }
}
