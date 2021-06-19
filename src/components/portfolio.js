import React, { Component } from 'react';

export default class Portfolio extends Component{
    render() {
        return (
            <section id="portfolio" className="s-portfolio target-section">

                <div className="row s-portfolio__header">
                    <div className="column large-12">
                        <h3>Some of my projects</h3>
                    </div>
                </div>
                <div className="row collapse block-large-1-4 block-medium-1-3 block-tab-1-2 block-500-stack folio-list">
                    <div className="column folio-item">
                        <a href="#modal-01" className="folio-item__thumb">
                            <img src="images/portfolio/droplet.jpg" 
                                srcset="images/portfolio/droplet.jpg 1x, 
                                        images/portfolio/droplet@2x.jpg 2x" alt=""></img>
                        </a>
                    </div>
                    <div className="column folio-item">
                        <a href="#modal-02" className="folio-item__thumb">
                            <img src="images/portfolio/lamp.jpg" 
                                srcset="images/portfolio/lamp.jpg 1x, 
                                        images/portfolio/lamp@2x.jpg 2x" alt=""></img>
                        </a>
                    </div>
                    <div className="column folio-item">
                        <a href="#modal-03" className="folio-item__thumb">
                            <img src="images/portfolio/minimalismo.jpg" 
                                srcset="images/portfolio/minimalismo.jpg 1x, 
                                        images/portfolio/minimalismo@2x.jpg 2x" alt=""></img>
                        </a>
                    </div>
                    <div className="column folio-item">
                        <a href="#modal-04" className="folio-item__thumb">
                            <img src="images/portfolio/shutterbug.jpg" 
                                srcset="images/portfolio/shutterbug.jpg 1x, 
                                        images/portfolio/shutterbug@2x.jpg 2x" alt=""></img>
                        </a>
                    </div>
                    <div className="column folio-item">
                        <a href="#modal-04" className="folio-item__thumb">
                            <img src="images/portfolio/shutterbug.jpg" 
                                srcset="images/portfolio/shutterbug.jpg 1x, 
                                        images/portfolio/shutterbug@2x.jpg 2x" alt=""></img>
                        </a>
                    </div>
                </div>
            </section>
        )
    }
};





