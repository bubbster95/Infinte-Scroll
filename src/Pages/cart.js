import React from 'react';
import '../index.css';
import InfiniteScroll from '../LoadMore/index.js';

export default class Cart extends React.Component {
    render() {
        return (
            <div className="avatars" id="avatars"> 
                <h1 className="title">Cart</h1>
                <InfiniteScroll/>
            </div>
        );
    }
}