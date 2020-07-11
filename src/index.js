import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {AvatarApi} from './Avatars/index.js';
import {Nav} from './Navigation/index.js';

export class InfinteScroll extends React.Component {
    render() {
        let wait = false;
        const loadMore = () => {
            if (!wait) {
                
                console.log(window.scrollY);

                wait = true;
                setTimeout(() => { wait = false; }, 500);
            }
        };
        const event = window.addEventListener('scroll', loadMore);

        return <h2>{event}</h2>;
    }
}

class Shop extends React.Component {
    render() {
        return (
            <div className="site">
                <Nav/>
                 <InfinteScroll/>
                <div className="avatars" id="avatars">
                    <AvatarApi/>
                    <AvatarApi/>
                    <AvatarApi/>
                    <AvatarApi/>
                    <AvatarApi/>
                    <AvatarApi/>
                    <AvatarApi/>
                    <AvatarApi/>
                    <AvatarApi/>
                </div>
            </div>
        );
    }
}
ReactDOM.render(<Shop />, document.getElementById('root'));