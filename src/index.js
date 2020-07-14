import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Nav} from './Navigation/index.js';
import InfiniteScroll from './LoadMore/index.js';

class Shop extends React.Component {
    render() {
        return (
            <div className="site">
                <Nav/>
                <div className="avatars" id="avatars"> 
                    <InfiniteScroll/>
                </div>
            </div>
        );
    }
}
ReactDOM.render(<Shop />, document.getElementById('root'));