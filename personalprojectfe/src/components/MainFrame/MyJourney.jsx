import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const MyJourney = () => {
    return (
        <section id='myjourney'>
        <div>
            <br />
            <br />
            <br />
            <h2 className='text-center p-2'>My Journey</h2>
        <div className='d-flex justify-content-center'>
<div className="accordion accordion-flush rounded bg-dark shadow-lg p-1" id="accordionFlushExample" style={{ maxWidth: '1000px'}}>
    <div className="accordion-item">
        <h2 className="accordion-header">
            <button className="accordion-button collapsed bg-dark text-white fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                2016-2018 Initial Exposure to Coding & Virtual Machines
            </button>
        </h2>
        <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body bg-dark text-white">
                My first foray into coding occurred around this time, primarily involving simple scripts in AutoHotkey aimed at automating tasks within games and facilitating entry into queues for limited clothing items. This involved identifying on-screen coordinates for mouse clicks, which were then looped until a specific screen change occurred, detected by the AutoHotkey script recognizing designated text areas, such as "Your queue position is XYZ," prompting the script to halt.
                <br /><br />
                Given the necessity to leave my computer idle during these operations, as it physically executed mouse movements and clicks with a browser window open, I explored the utilisation of virtual machines (VMs). I found my solution in running a Windows virtual machine via VirtualBox initially, and later, VMware Workstation, alongside the AutoHotkey script and an open browser window.
                <br /><br />
                While employing this setup, I swiftly became aware of the resource-intensive nature of running a VM on a typical home computer. This realisation prompted my journey into Windows optimization, wherein I endeavoured to streamline the system by eliminating any extraneous features and services.
            </div>
        </div>
    </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed bg-dark text-white fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        2018-2022 Testing Website Functionality, Translating code & Oracle Cloud
                    </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body bg-dark text-white">
                        During this period, I actively engaged with various gaming community forums, often powered by platforms like IPS' Invision Community Engine or MyBB. I found myself assisting forum developers in implementing new features or plugins by deliberately stress-testing website elements, seeking out misaligned components.
                        <br /><br />
                        One of the most significant undertakings during this time was translating documentation for these plugins. As the original documentation was in English, and many of the developers were native Polish speakers who struggled with certain terminologies, I took it upon myself to translate these materials to Polish to the best of my ability. Despite not being fully fluent in the intricacies of how these plugins functioned or the nuances of their code syntax, I found immense satisfaction in knowing that my translations would benefit multiple IPS forums when developers sought to implement specific plugins.
                        <br /><br />
                        Oracle cloud is another topic I went into, the purpose of it was to run a instance on a ubuntu operating system to host game servers. While exploring this I learnt how to create a new instance, basic setup of a virtual cloud network configuring the TCP & UDP. Using PuTTY to ssh into the instance and install the needed dependencies to run a game server with automatic backups spanning at most up to a week.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed bg-dark text-white fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        2023 - Present The Software Engineering Reskilling Opportunity
                    </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body bg-dark text-white">
                        Upon learning about the reskilling opportunity, I was immediately enthused and promptly applied, recognizing it as my gateway into the world of engineering. This decision embarked me on a six-month journey that is now nearing its conclusion.
                        <br /><br />
                        Throughout my time in the reskilling cohort, I have garnered a wealth of experience beyond my initial expectations. While I hesitate to claim expertise in any of the languages and frameworks I've encountered, I can confidently assert that I possess a solid understanding of their operation. Moving forward, I recognize that my path in engineering necessitates a deeper commitment to a specific domain, whether it be backend development, testing, or DevOps.
                        <br /><br />
                        Although the field remains broad, my interests lie predominantly within these facets of the industry, and I eagerly anticipate further immersion and expertise development in any one of them.
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
        </section>
    );
};

export default MyJourney;