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
                    <a href="github">
                        <img src={github} alt="github icon" />
                    </a>
                </Col>
                <Col>
                    <a href="linkedin">
                        <img src={linkedin} alt="github icon" />
                    </a>
                </Col>
                <Col>
                    <a href="twitter">
                        <img src={twitter} alt="github icon" />
                    </a>
                </Col>

            </Row>
        </div>
    )
}

export default Footer;