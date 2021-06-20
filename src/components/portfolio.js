import React, { Component } from 'react';
import Portfolios from "./raw/portfoliolist.json"

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
                    {Portfolios.map((item,index) => {
                        return (
                            <div className="column folio-item" key={item.name}>
                                <a href={item.link} className="folio-item__thumb" target="_blank" rel="noopener noreferrer">
                                    <img src={item.thumbnail} alt={item.name}></img>
                                </a>
                            </div>
                        )
                    })}
                </div>
            </section>
        )
    }
};





