import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
             
             <NavLink exact activeClassName="Navbar-active" to="/">Home</NavLink>
             <NavLink exact activeClassName="Navbar-active" to="/cocacola">CocaCola</NavLink>
             <NavLink exact activeClassName="Navbar-active" to="/lays">Lays</NavLink>
             <NavLink exact activeClassName="Navbar-active" to="/freshfish">Fresh Fish</NavLink>
             
            </div>
        )
    }
}

export default Navbar;