import React from 'react';
import '../index.css';

export default class Login extends React.Component {
    render() {
        return (
            <div className="avatars" id="avatars"> 
                <h1 className="title">Login</h1>
                <input className="login" placeholder="Username"></input>
                <input className="login" placeholder="Password"></input>
                <button className="submit">Submit</button>
            </div>
        );
    }
}