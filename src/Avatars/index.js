import React from 'react';
import './style.css';

let uniqId = 0;

export class AvatarApi extends React.Component {
    render() {
        uniqId++;
        let size = 250;
        let image = `https://api.adorable.io/avatars/` + size + `/` + uniqId + `@adorable.png`;
        return (
            <div className="avatar">
                <img src={image} alt="Adorable API" id={uniqId}/>
            </div>
        );
    }
}