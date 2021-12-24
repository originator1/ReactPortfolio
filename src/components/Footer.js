import React from "react";
import { Row, Col } from 'react-bootstrap';
import github from '../styles/githubIcon.svg';
import linkedin from '../styles/linkedIn.svg';
import twitter from '../styles/twitter.svg';
import "./Footer.css"

function Footer() {
    return (
        // <div className="footerBox">
            <div className="text-center iconRow" cs="auto">
                  
                    <a href="https://github.com/originator1">
                        <img className="eachIcon" src={github} alt="github icon" />
                    </a>
               
                    <a href="https://www.linkedin.com/in/james-garinger-22246421b/">
                        <img className="eachIcon" src={linkedin} alt="linkedIn icon" />
                    </a>
                
                    <a href="https://twitter.com">
                        <img className="eachIcon" src={twitter} alt="twitter icon" />
                    </a>
               

            </div>
        // </div>
    )
}

export default Footer;