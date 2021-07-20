import React, { Component } from 'react';
import Rellax from 'rellax';

export default class Hero extends Component{
    componentDidMount() {
        // We can keep a reference to Rellax in case we need it later
        this.rellax = new Rellax('.rellax')
    }

    render() {
        return (
        <section id="hero" className="s-hero target-section">
        <div className="s-hero__bg rellax" data-rellax-speed="-7"></div>

        <div className="row s-hero__content">
            <div className="column">
                <div className="s-hero__content-about">
                    <h1>Engineer<br></br>ready to<span
                        className="txt-rotate"
                        data-period="1000"
                        data-rotate='[ " create", " code", " help", " innovate"]'>
                    </span><span id="txt-rotate-cursor">.</span>
                    </h1>
                </div>
            </div>
        </div>
        <div className="s-hero__content-footer">
                <p>Background vector created by liuzishan - www.freepik.com</p>
        </div>
        </section>
        )
    }
};