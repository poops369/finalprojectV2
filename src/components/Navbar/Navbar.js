import React, { Component } from "react";
import { MenuItemes } from "./Menuitems";
import "./Navbar.css";
import logo from "../../../src/logo.jpg";

class Navbar extends Component {
    state = { clicked: false };
    handleclick = () => {
        this.setState({ clicked: !this.state.clicked });
    };
    render() {
        return (
            <nav className="NavbarItems">
                <div>
                    <div>
                        <h1 className="navbar-logo">
                            <img className="logo" src={logo} alt="logoo" />
                        </h1>
                    </div>
                    <div>
                        <h4 className="Logo-title">INFINITY EVENTS</h4>
                    </div>
                </div>
                <div className="menu-icon" onClick={this.handleclick}>
                    <i
                        className={
                            this.state.clicked ? "fas fa-times" : "fas fa-bars"
                        }
                    ></i>
                </div>

                <ul
                    className={
                        this.state.clicked ? "nav-menu active" : "nav-menu"
                    }
                >
                    {MenuItemes.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        );
    }
}
export default Navbar;
