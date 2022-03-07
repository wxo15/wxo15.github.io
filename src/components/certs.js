import React, { Component } from 'react';
import Certs from "./raw/certlist.json"

export default class Cert extends Component{
    render() {
        return (
            <section id="certs" className="s-resume target-section">
                <div className="row s-portfolio__header">
                    <div className="column large-12">
                        <h3>Some of my certifications/past courses</h3>
                    </div>
                </div>
                {Certs.map((item,index) => {
                    return (
                        <div key={item.area} className="row s-resume__section">
                            <div className="column large-3 tab-12">
                                <h3 className="section-header-allcaps">{item.area}</h3>
                            </div>
                            <div className="column large-9 tab-12">                                    
                                <p>
                                <ul>
                                    {item.certlist.map((cert, index) => {
                                        return (
                                            <li>
                                                <span style={{marginRight:"0.6rem"}}>
                                                    <a detail={cert.title} href={cert.link} target="_blank" rel="noopener noreferrer">
                                                        {cert.title}
                                                    </a>
                                                </span> 
                                                <span className="resume-block__header-date">
                                                    {cert.earndate}
                                                </span>
                                            </li>
                                        )
                                    })}
                                </ul>
                                </p>
                            </div>
                        </div>
                    )
                })}
            </section>
        )
    }
};

