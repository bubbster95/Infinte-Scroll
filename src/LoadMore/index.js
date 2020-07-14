import React from 'react';
import './style.css';
import AvatarApi from '../Avatars/index.js';

let array = [];

export default class InfiniteScroll extends React.Component {
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
