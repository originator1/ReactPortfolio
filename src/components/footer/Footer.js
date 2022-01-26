import React from "react";
import github from '../../images/githubIcon.svg';
import linkedin from '../../images/linkedIn.svg';
import twitter from '../../images/twitter.svg';
import "./Footer.css"

function Footer() {
    return (
        // <div className="footerBox">
            <div className="text-center iconRow">
                  
                    <a style={{marginRight: '2.5vw'}} href="https://github.com/originator1">
                        <img className="eachIcon" src={github} alt="github icon" />
                    </a>
               
                    <a href="https://www.linkedin.com/in/james-garinger-22246421b/">
                        <img className="eachIcon" src={linkedin} alt="linkedIn icon" />
                    </a>
                
                    <a style={{marginLeft: '2.5vw'}} href="https://twitter.com">
                        <img className="eachIcon" src={twitter} alt="twitter icon" />
                    </a>
               

            </div>
        // </div>
    )
}

export default Footer;