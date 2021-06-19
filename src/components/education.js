import React, { Component } from 'react';
import Items from "./careerlist.json"

export default class Education extends Component{
    render() {
        return (
        <section id="career" className="s-resume target-section">
        <div className="row s-resume__section">
            <div className="column large-3 tab-12">
                <h3 className="section-header-allcaps">Education</h3>
            </div>
            <div className="column large-9 tab-12">
                <div className="resume-block">

                    <div className="resume-block__header">
                        <h3>University of Life</h3>
                        <p className="resume-block__header-meta">
                            <span>Master in Graphic Design</span> 
                            <span className="resume-block__header-date">
                                April 2015
                            </span>
                        </p>
                    </div>

                    <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore 
                    vero quidem nobis maxime dolorem aliquam quisquam eum ipsum amet. Vitae 
                    aut atque fuga dolorem. Vel voluptatibus fugiat nam. Impedit aperiam 
                    nesciunt facilis! Porro architecto dicta inventore tempora ratione quia odio.
                    </p>

                </div>

                <div className="resume-block">

                    <div className="resume-block__header">
                        <h4 className="h3">School of Cool Designers</h4>
                        <p className="resume-block__header-meta">
                            <span>B.A. Degree in Graphic Design</span> 
                            <span className="resume-block__header-date">
                                August 2012
                            </span>
                        </p>
                    </div>

                    <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore 
                    vero quidem nobis maxime dolorem aliquam quisquam eum ipsum amet. Vitae 
                    aut atque fuga dolorem. Vel voluptatibus fugiat nam. Impedit aperiam 
                    nesciunt facilis! Porro architecto dicta inventore tempora ratione quia odio.
                    </p>

                </div>
            </div>
        </div>
        </section>
        
        )
    }
};