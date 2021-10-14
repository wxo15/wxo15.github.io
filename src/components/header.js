import React, { Component } from 'react';
import Items from "./raw/headerlist.json"

export default class NavigationBar extends Component{
    render() {
        return (
        <div className="s-header" id="header">
        <div className="s-header__nav-wrap">
            <nav>
            <ul className="s-header__nav">
            {Items.map((item,index) => {
                return (
                    <li key={item.title}><a className="smoothscroll" href={item.url}>{item.title}</a></li>
                )
            })}
            </ul>
            </nav>
        </div>
        <a className="s-header__menu-toggle" href="#0" title="Menu">
            <span className="s-header__menu-icon"></span>
        </a>
        </div>
        )
    }
};