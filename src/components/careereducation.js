import React, { Component } from 'react';
import Careers from "./raw/careerlist.json"
import Educations from "./raw/educationlist.json"

export default class Career extends Component{
    render() {
        return (
        <div>
        <section id="career" className="s-resume target-section">
        <div className="row s-resume__section">
            <div className="column large-3 tab-12">
                <h3 className="section-header-allcaps">Career</h3>
            </div>
            <div className="column large-9 tab-12">
                {Careers.map((item,index) => {
                    return (
                        <div className="resume-block" key={item.company}>
                            <div className="resume-block__header">
                                <h4><a href={item.link} target="blank">{item.company}</a></h4>
                                <img src={item.logo} alt=""></img>
                                <p className="resume-block__header-meta">
                                    <span>{item.jobtitle}</span> 
                                    <span className="resume-block__header-date">
                                        {item.period}
                                    </span>
                                </p>
                            </div>
                            <p>
                            {item.description}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
        </section>
        <section id="education" className="s-resume target-section">
        <div className="row s-resume__section">
            <div className="column large-3 tab-12">
                <h3 className="section-header-allcaps">Education</h3>
            </div>
            <div className="column large-9 tab-12">
                {Educations.map((item,index) => {
                    return (
                        <div className="resume-block" key={item.institution}>
                            <div className="resume-block__header">
                                <h4><a href={item.link} target="blank">{item.institution}</a></h4>
                                <img src={item.logo} alt=""></img>
                                <p className="resume-block__header-meta">
                                    <span>{item.course}</span> 
                                    <span className="resume-block__header-date">
                                        {item.period}
                                    </span>
                                </p>
                            </div>
                            <p>
                            {item.description}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
        </section>
        </div>
        )
    }
};