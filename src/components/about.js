import React, { Component } from 'react';

export default class About extends Component{
    render() {
        return (
        <section id="about" className="s-about target-section">
            <div className="row">
                <div className="column large-3 tab-12">
                    <img className="s-about__pic" src="images/avatar.jpeg" alt=""></img>
                </div>
                <div className="column large-9 tab-12 s-about__content">
                    <h3>About Me</h3>
                    <p>
                    Engineer, data analyst, developer and coffee drinker
                    </p>
                    <hr></hr>
                    <div className="row s-about__content-bottom">
                        <div className="column w-1000-stack">
                            <h3>Contact Details</h3>
                            <p>
                            Max Ooi <br></br>
                            Somewhere in Selangor, Malaysia <br></br>
                            </p>
                            <div className="s-hero__content-social">
                                <a href="tel:+60177218779"><i alt="whatsapp" className="fa fa-whatsapp"></i></a> <br></br>
                                <a href="mailto:wxooi15@gmail.com"><i alt="linked" className="fa fa-envelope"></i> </a>  
                                <a href="https://www.linkedin.com/in/maxooiwx"><i alt="linkedin" className="fa fa-linkedin"></i> </a>   
                                <a href="http://github.com/wxo15"><i alt="github" className="fa fa-github"></i> </a>
                            </div>
                        </div>
                        <div className="column w-1000-stack">
                            <a href="#0" className="btn btn--download">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 16L16 11 13 11 13 4 11 4 11 11 8 11z"></path><path d="M20,18H4v-7H2v7c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2v-7h-2V18z"></path></svg>
                                Download CV (Soon)
                            </a>
                        </div>
                    </div>
                </div>
            </div> 
    
        </section> 
        
        )
    }
};