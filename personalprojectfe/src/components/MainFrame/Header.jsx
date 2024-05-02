import React from 'react';
import StockProfileP from "../Images/StockProfileP.png";
import { Container, Row, Col } from 'react-bootstrap';
import LinkedInLogo from "../Images/linkedin-1-svgrepo-com.svg"
import GithubLogo from "../Images/gitimg.png"
import EmailPicture from "../Images/email-newsletter-subscription-svgrepo-com.svg"
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
    const openLinkedIn = () => {
        window.open('https://www.linkedin.com/in/patryk-flasz', '_blank');
    };

    const openGithub = () => {
        window.open('https://github.com/Paprryk', '_blank');
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        toast("Email copied to clipboard", { autoClose: 2000 });
    };
    return (
        <div className="py-5 text-white" id="intro">
            <Container className="rounded p-4 bg-dark shadow-lg" style={{ maxWidth: '800px' }}>
                <Row>
                    {/* Left side container */}
                    <Col md={6}>
                        <div id="myDiv" className="rounded p-4 text-center ">
                            <img src={StockProfileP} alt="FacePicture" style={{ width: "100px", height: "100px" }} />
                            <h1>Patryk Flasz</h1>
                            <p>Junior Software Engineer</p>
                            <img src={LinkedInLogo} alt="LinkedIn Icon" style={{ width: "30px", height: "30px", cursor: "pointer" }} onClick={openLinkedIn} />&nbsp;&nbsp;
                            <img src={GithubLogo} alt="Github Icon" style={{ width: "30px", height: "30px", cursor: "pointer" }} onClick={openGithub} />&nbsp;&nbsp;
                            <img src={EmailPicture} alt="Email Icon" style={{ width: "30px", height: "30px", cursor: "pointer" }} onClick={() => copyToClipboard("patryk040600@gmail.com")} />
                            <ToastContainer />
                        </div>
                    </Col>
                    {/* Right side content */}
                    <Col md={6}>
                        <div className="bg-dark text-white p-1">
                            <h2>Introduction</h2>
                            <p>Shifting from customer advising in banking to software engineering, I bring four years of customer-centric expertise and a strong drive for innovation. Currently honing my coding and cloud network skills, I'm eager to blend my experience with new technologies. Seeking an engaging role in software engineering to drive transformative solutions and contribute fresh perspectives.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Header;
