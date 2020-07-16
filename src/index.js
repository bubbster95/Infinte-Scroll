import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './Navigation/index.js';
import Shop from './Pages/shop.js';

class Site extends React.Component {
    render() {
        return (
            <div className="site">
                <Nav/>
                <Shop/>
            </div>
        );
    }
}

ReactDOM.render(<Site />, document.getElementById('root'));