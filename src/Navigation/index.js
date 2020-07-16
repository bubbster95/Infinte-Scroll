import React from 'react';
import './style.css';

export default class Nav extends React.Component {
    render() {
        return (
            <div className="nav">
                <h1> Infinite Scroll React </h1>
                {/* <div className="nav-buttons">
                    <Link className="buttons" to="/">Shop</Link>
                    <Link className="buttons" to="/cart">Cart</Link>
                    <Link className="buttons" to="/login">Login</Link>
                </div> */}
            </div>
        )
    }
}
