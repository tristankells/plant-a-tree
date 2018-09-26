import React, { Component } from "react";

import './Navbar.css';

class Navbar extends Component {
    render(){
        const navbar = this.props.navbar;
        return (
            <header className="navbar">
            <nav className="navbar__navigation">
            <div></div>
            <div className="navbar__logo"><a href="/">PlantATree</a></div>
            <div className="spacer"></div>
            <div className="navbar__links">
                <ul>
                    <li><a>Account</a></li>
                    <li><a>Cart</a></li>
                </ul>
            </div>
        </nav>
    </header>
        );
    }
}

export default Navbar;