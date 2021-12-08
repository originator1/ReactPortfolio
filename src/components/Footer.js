import React from "react";
import { Row, Col } from 'react-bootstrap';
import github from '../styles/githubIcon.svg';
import linkedin from '../styles/linkedIn.svg';
import twitter from '../styles/twitter.svg';
//import any images

function Footer() {
    return (
        <div>
            <Row className="justify-content-center text-center " cs="auto">
                <Col>
                    <a href="https://github.com/originator1">
                        <img src={github} alt="github icon" />
                    </a>
                </Col>
                <Col>
                    <a href="https://www.linkedin.com/in/james-garinger-22246421b/">
                        <img src={linkedin} alt="linkedIn icon" />
                    </a>
                </Col>
                <Col>
                
                    <a href="twitter">
                        <img src={twitter} alt="twitter icon" />
                    </a>
                </Col>

            </Row>
        </div>
    )
}

export default Footer;