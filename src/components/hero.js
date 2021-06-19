import React, { Component } from 'react';

export default class Hero extends Component{
    render() {
        return (
        <section id="hero" className="s-hero target-section">
        <div className="s-hero__bg rellax" data-rellax-speed="-7"></div>
        <div className="row s-hero__content">
            <div className="column">
                <div className="s-hero__content-about">
                    <h1>I am Max</h1>
                    <div className="s-hero__content-about">
                        <h3>
                        Write something here,
                        and here
                        & and here.
                        </h3>
                        <footer>
                            <div className="s-hero__content-social">
                                <a href="https://www.linkedin.com/in/maxooiwx" target="blank"><i alt="linked" className="fa fa-linkedin"></i></a>
                                <a href="http://github.com/wxo15" target="blank"><i alt="github" className="fa fa-github"></i></a>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
        </section>
        )
    }
};