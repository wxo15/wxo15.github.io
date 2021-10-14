import React, { Component } from 'react';
import Badges from "./raw/badgelist.json"

export default class Badge extends Component{
    render() {
        return (
            <section id="badge" className="s-badge target-section">

                <div className="row s-badge__header">
                    <div className="column large-12">
                        <h3>Some of my badges</h3>
                    </div>
                </div>
                <div className="row collapse block-large-1-4 block-medium-1-3 block-tab-1-2 block-500-stack badge-list">
                
                    {Badges.map((item,index) => {
                        return (
                            <div key={item.name} data-iframe-width="150" data-iframe-height="270" data-share-badge-id={item.id} data-share-badge-host="https://www.credly.com"></div>
                        )
                    })}
                </div>
            </section>
        )
    }
};

