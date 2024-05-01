import React from 'react';
import { Carousel } from 'react-bootstrap';
import test from "../Images/StockProfileP.png"
import mySQL from "../Images/mysql-svgrepo-com.svg"
import jenkins from "../Images/jenkins-svgrepo-com.svg"
import git from "../Images/git-svgrepo-com.svg"
import oracle from "../Images/oracle-svgrepo-com.svg"
import selenium from "../Images/selenium-svgrepo-com.svg"
import springboot from "../Images/spring-boot-svgrepo-com.svg"
import react from "../Images/react-svgrepo-com.svg"
import groovy from "../Images/groovy-svgrepo-com.svg"
import sql from "../Images/sql-svgrepo-com.svg"
import jsx from "../Images/jsx-svgrepo-com.svg"
import javascript from "../Images/javascript-svgrepo-com.svg"
import java from "../Images/java-svgrepo-com.svg"
import css from "../Images/css-3-svgrepo-com.svg"
import html from "../Images/html-5-svgrepo-com.svg"

const TechnicalSkills = () => {
    return (
        <section id="technical-skills">
            <div className="d-flex justify-content-center">
                <div className="row">
                    {/* Left carousel - Coding languages */}
                    <div className="col-6 ">
                    <h2 className='text-center'>Languages</h2>
                        <Carousel className=" rounded p-5 bg-dark shadow-lg" style={{ maxWidth: '300px', maxHeight: "330px" }}>
                            <Carousel.Item>
                                <img src={html} class="d-block w-100" alt="HTML" />
                                <br />
                                <br />
                                <br />
                                <Carousel.Caption className='p-2'>
                                    <h5>HTML</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={css} class="d-block w-100" alt="CSS" />
                                <br />
                                <br />
                                <br />
                                <Carousel.Caption className='p-2'>
                                    <h5>CSS</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={java} class="d-block w-100" alt="Java" />
                                <br />
                                <br />
                                <br />
                                <Carousel.Caption className='p-2'>
                                    <h5>Java</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={jsx} class="d-block w-100" alt="JSX" />
                                <br />
                                <br />
                                <br />
                                <Carousel.Caption className='p-2'>
                                    <h5>JSX</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={javascript} class="d-block w-100" alt="JavaScript" />
                                <br />
                                <br />
                                <br />
                                <Carousel.Caption className='p-2'>
                                    <h5>JavaScript</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={sql} class="d-block w-100" alt="SQL" />
                                <br />
                                <br />
                                <br />
                                <Carousel.Caption className='p-2'>
                                    <h5>SQL</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={groovy} class="d-block w-100" alt="Groovy" />
                                <br />
                                <br />
                                <br />
                                <Carousel.Caption className='p-2'>
                                    <h5>Groovy</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>

                    {/* Right carousel - Tools */}
                    <div className="col-6">
                    <h2 className='text-center'>Tools</h2>
                        <Carousel className=" rounded p-5 bg-dark shadow-lg" style={{ maxWidth: '300px', maxHeight: "330px" }}>
                            <Carousel.Item>
                                <img src={react} class="d-block w-100" alt="React" />
                                <br />
                                <br />
                                <br />
                                <Carousel.Caption className='p-2'>
                                    <h5>React</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={springboot} class="d-block w-100" alt="Spring Boot" />
                                <br />
                                <br />
                                <br />
                                <Carousel.Caption className='p-2'>
                                    <h5>Spring Boot</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={selenium} class="d-block w-100" alt="Selenium" />
                                <br />
                                <br />
                                <br />
                                <Carousel.Caption className='p-2'>
                                    <h5>Selenium</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={oracle} class="d-block w-100" alt="Oracle Cloud" />
                                <br />
                                <br />
                                <br />
                                <Carousel.Caption className='p-2'>
                                    <h5>Oracle Cloud</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={git} class="d-block w-100" alt="GitHub" />
                                <br />
                                <br />
                                <br />
                                <Carousel.Caption className='p-2'>
                                    <h5>GitHub</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={jenkins} class="d-block w-100" alt="Jenkins" />
                                <br />
                                <br />
                                <br />
                                <Carousel.Caption className='p-2'>
                                    <h5>Jenkins</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={mySQL} class="d-block w-100" alt="mySQL" />
                                <br />
                                <br />
                                <br />
                                <Carousel.Caption className='p-2'>
                                    <h5>mySQL</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TechnicalSkills;
