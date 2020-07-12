import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {AvatarApi} from './Avatars/index.js';
import {Nav} from './Navigation/index.js';

let array = [];
class InfinteScroll extends React.Component {
    componentDidMount() {
        setInterval(() => {
            this.setState(() => {
                return {unseen: "not Displayed"};
            });
        }, 1000);
    }
    render() {
        let wait = false;
        const scrollHeight = () => {
            if (!wait) {
                const scrollAt = window.scrollY;
                const body = document.body;
                const html = document.documentElement;
                const height = Math.max(
                    body.scrollHeight, body.offsetHeight,
                    html.clientHeight, html.scrollHeight, html.offsetHeight
                );
                if (scrollAt >= height-750) {
                    let newArray = Array(9).fill(<AvatarApi/>)
                    array.push(newArray);
                    return array;
                }
                wait = true;
                setTimeout(() => { wait = false; }, 500);
            } return array;
        };
        window.addEventListener('scroll', scrollHeight);
        return scrollHeight();
    }
}

class Shop extends React.Component {
    
    render() {
        return (
            <div className="site">
                <Nav/>
                <div className="avatars" id="avatars"> 
                    <InfinteScroll/>
                </div>
            </div>
        );
    }
}
ReactDOM.render(<Shop />, document.getElementById('root'));