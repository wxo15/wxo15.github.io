import React, { Component } from 'react';

export default class Hero extends Component{
    render() {
        return (
        <section id="hero" className="s-hero target-section">
        <div className="s-hero__bg rellax" data-rellax-speed="-7"></div>
        <div className="row s-hero__content">
            <div className="column">
                <div className="s-hero__content-about">
                    <h1>Engineer & developer<br></br>ready to create</h1>
                    <div className="s-hero__content-about">
                        <h3>Reachable through:</h3>
                        <footer>
                            <div className="s-hero__content-social">
                                <i alt="linked" className="fa fa-whatsapp"></i>
                                <i alt="linked" className="fa fa-envelope"></i>
                                <i alt="linked" className="fa fa-linkedin"></i>
                                <i alt="github" className="fa fa-github"></i>
                            </div>
                        </footer>
                    </div>
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