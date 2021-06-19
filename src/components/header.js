import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Items from "./raw/headerlist.json"

export default class NavigationBar extends Component{
    render() {
        return (
        <header className="s-header" id="home">
        <div className="s-header__content">
        <Navbar bg="light" expand="lg" id="nac-wrap" className="s-header__nav-wrap" sticky="top">
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <ul className="s-header__nav">
            {Items.map((item,index) => {
                return (
                    <li key={item.title}><a className="smoothscroll" href={item.url}>{item.title}</a></li>
                )
            })}
            </ul>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        </div>
        <a className="s-header__menu-toggle" href="#0"><span>Menu</span></a>
        </header>
        )
    }
};