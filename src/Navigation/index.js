import React from 'react';
import './style.css';

export class Nav extends React.Component {
    render() {
        return (
            <div className="nav">
                <h1>Barter & Trade React </h1>
                <div className="nav-buttons">
                    <button>Shop</button>
                    <button>Cart</button>
                    <button>Login</button>
                </div>
            </div>
        )
    }
}