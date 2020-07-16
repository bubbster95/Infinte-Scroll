import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './index.css';
import Nav from './Navigation/index.js';
import Cart from './Pages/cart.js';
import Shop from './Pages/shop.js';
import Login from './Pages/login.js'

class Site extends React.Component {

    render() {
        return (
            <Router>
                <Nav/>
                <div className="site">
                    <Route exact path="/" component={Shop}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/login" component={Login}/>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<Site />, document.getElementById('root'));