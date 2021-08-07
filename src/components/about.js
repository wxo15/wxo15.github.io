import React, { Component } from 'react';

export default class About extends Component{
    render() {
        return (
        <section id="about" className="s-about target-section">
            <div className="row">
                <div className="column large-3 tab-12">
                    <img className="s-about__pic" src={process.env.PUBLIC_URL + "/images/avatar.jpeg"} alt=""></img>
                </div>
                <div className="column large-9 tab-12 s-about__content">
                    <h3>About Me</h3>
                    <p>
                    Engineer, data analyst, developer and coffee drinker
                    </p>
                    <hr></hr>
                    <div className="row s-about__content-bottom">
                        <div className="column w-1000-stack">
                            <h3>Find me on</h3>
                            <p>
                            Max Ooi Wei Xiang<br></br>
                            Somewhere in Selangor, Malaysia <br></br>
                            </p>
                            <div className="s-hero__content-social">
                                <a href="https://api.whatsapp.com/send?phone=60177218779" target="_blank" rel="noopener noreferrer"><i alt="whatsapp" className="fa fa-whatsapp"></i></a> <br></br>
                                <a href="mailto:wxooi15@gmail.com" target="_blank" rel="noopener noreferrer"><i alt="linked" className="fa fa-envelope"></i> </a>  
                                <a href="https://www.linkedin.com/in/maxooiwx" target="_blank" rel="noopener noreferrer"><i alt="linkedin" className="fa fa-linkedin"></i> </a>   
                                <a href="http://github.com/wxo15" target="_blank" rel="noopener noreferrer"><i alt="github" className="fa fa-github"></i> </a>
                                <a href="https://leetcode.com/wxo15/" target="_blank" rel="noopener noreferrer"><i alt="leetcode" className="fa iconify" data-icon="simple-icons:leetcode"></i></a>
                            </div>
                        </div>
                        <div className="column w-1000-stack">
                            <a href="mailto:wxooi15@gmail.com?subject=CV request&body=Hi%2c%0D%0AI%20would%20like%20to%20request%20a%20copy%20of%20your%20CV." className="btn btn--download">
                            <i alt="linked" className="fa fa-envelope .btn--download"></i> Request CV
                            </a>
                        </div>
                    </div>
                </div>
            </div> 
    
        </section> 
        
        )
    }
};