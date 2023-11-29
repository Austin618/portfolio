import React, { useState } from "react";

import "./home.css";


import {Link} from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css';
import Navbar from "../../component/navbar/navbar";
import Float from "../../component/float/float";
import Footnote from "../../component/footnote/footnote";
import Clock from "../../component/clock/clock";
import Cards from "../../component/cards/cards";
import Line from "../../component/line/line";



const Home = () => {

    return (
        <div>
            <Navbar />
            <div className="grey-background"></div>
            <img className="parentOfPicContainer picContainer" src="https://i.ibb.co/m8DLvxJ/1-1.jpg" alt="background" />

            <div className="marginLeft welcome">
                <h1 style={{ fontSize: '50px'}}>Welcome to <br />Austin(Qiming) Ye's Portfolio</h1><br />
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A full stack developer</p>
            </div>

            <Line />
            <div id="experience" className="test marginLeft">
                <i className="fa-solid fa-building sameLine"></i>
                <h1 className="sameLine">Experience</h1>

                <div>
                    <h3>Software Engineer Intern</h3>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p style={{ display: 'inline-block' }}>ReactNative, AWS(Amplify, DynamoDB, S3, Cognito)</p>
                        <p style={{ display: 'inline-block', textAlign: 'right' }}>Toronto, ON (Remote)</p>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p style={{ display: 'inline-block' }}>Develop for Good/Louisiana Husky Rescue Organization:  <a href="http://louisianahuskyrescue.com/" target="_blank">Link</a></p>
                        <p style={{ display: 'inline-block', textAlign: 'right' }}>May. 2023 ~ Aug. 2023</p>
                    </div>
                    App (petOffenders):
                    <p>&nbsp;&nbsp; • Report abuse/missing pets</p>
                    <p>&nbsp;&nbsp; • Check abuse/missing area on map</p>
                    <p>&nbsp;&nbsp; • Search "at risk" individuals</p>

                    Responsible for:
                    <p>&nbsp;&nbsp; • Create GraphQL APIs to provide different functions for users with different privileges</p>
                    <p>&nbsp;&nbsp; • Administration pages, report/map pages for registered users, etc.</p>
                </div><br />

                <div>
                    <h3>Software Engineer Intern</h3>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p style={{ display: 'inline-block' }}>ReactNative, NodeJS(ReactJS, ExpressJS), MongoDB, Mocha/Chai</p>
                        <p style={{ display: 'inline-block', textAlign: 'right' }}>Toronto, ON (Remote)</p>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p style={{ display: 'inline-block' }}>TAPP Website: <a href="https://theteacherapp.ca/" target="_blank">Link</a></p>
                        <p style={{ display: 'inline-block', textAlign: 'right' }}>Jan. 2022 ~ Apr. 2022</p>
                    </div>

                    <p>Helping teachers address mental health issues</p>
                    App:
                    <p>&nbsp;&nbsp; • Search, check news, chat with others, message notification</p>
                    Web:
                    <p>&nbsp;&nbsp; • Purchase services, change account info such as emails, password, phone number, etc. (for administrators)</p>
                    Responsible for:
                    <p>&nbsp;&nbsp; • Build RESTful APIs for both iOS app and web app</p>
                    <p>&nbsp;&nbsp; • Integrated with cookie-session based authentication approach</p>
                    <p>&nbsp;&nbsp; • OAuth2.0(PassportJS) for authorization</p>
                    <p>&nbsp;&nbsp; • Bcrypt to salt and hash the password</p>
                </div>
            </div>

            <Line />
            <div id="projects" className="test marginLeft">
                <i className="fa-solid fa-list-check sameLine"></i>
                <h1 className="sameLine">Projects</h1>

                <div className="project">
                    <h2>Currency Exchanger</h2>
                    <p>
                        Build microservices for currency exchange rate service and currency conversion service. Use GKE to keep services always running without downtime.
                    </p>
                    <p>Technologies: Java (Spring Boot, Spring Cloud), Docker, Google Kubernetes Engine (GKE)</p>
                    <button className="view" onClick={() => window.open('https://github.com/Austin618/SpringBoot_Microservices_Kubernetes', '_blank')}>
                        View Repository
                    </button>
                </div>

                <div className="project">
                    <h2>Blog System</h2>
                    <p>
                        Provide a blog communication service that allows different users to post blogs and comment on others' blogs. Use JWT authentication and DTO design pattern.
                    </p>
                    <p>Technologies: Java (Spring Boot, Spring Security), MySQL, AWS (Elastic Beanstalk, RDS)</p>
                    <button className="view" onClick={() => window.open('https://github.com/Austin618/Blog_System', '_blank')}>
                        View Repository
                    </button>
                </div>

                <div className="project">
                    <h2>TikTok Tag Analyzer</h2>
                    <p>
                        Generate tags/labels for influencers through third-party TikTok APIs. Analyze customized tags and search matching influencers to provide recommendations for advertisers.
                    </p>
                    <p>Technologies: VueJS, Flask, MongoDB, Heroku, Sentry</p>
                    <button className="view" onClick={() => window.open('https://github.com/Austin618/TikTok_influencers_tags', '_blank')}>
                        View Repository
                    </button>
                </div>

                <div className="project">
                    <h2>YouTube Keywords Recommendation System</h2>
                    <p>
                        Get real-time data such as channels/playlists/videos info through Youtube official API directly. Design string algorithms for recommendation.
                    </p>
                    <p>Technologies: ReactJS, ExpressJS, Heroku, Docker</p>
                    <button className="view" onClick={() => window.open('https://github.com/Austin618/Youtube_channels_analysis', '_blank')}>
                        View Repository
                    </button>
                </div>

                <div className="project">
                    <h2>Furniture Exchanger</h2>
                    <p>
                        Search/publish/delete/favorite items, remove users (for admin user), message notification, change user password/email.
                    </p>
                    <p>Technologies: ReactJS, ExpressJS, MongoDB, Mocha/Chai, Heroku</p>
                    <button className="view" onClick={() => window.open('https://github.com/Austin618/Furniture_exchange', '_blank')}>
                        View Repository
                    </button>
                </div>
            </div>

            <Line />
            <div id="skills" className="test marginLeft">
                <i className="fa-solid fa-code sameLine"></i>
                <h1 className="sameLine">Skills</h1>

                <h2>&nbsp;Language Skills</h2>
                <p>&nbsp;&nbsp; • English</p>
                <p>&nbsp;&nbsp; • Mandarin (Native)</p>
                <p>&nbsp;&nbsp; • Japanese</p>

                <h2>&nbsp;Programming Skills</h2>
                <h3>&nbsp;&nbsp;Programming Languages</h3>
                <p>&nbsp;&nbsp; • Java</p>
                <p>&nbsp;&nbsp; • JavaScript</p>
                <p>&nbsp;&nbsp; • Python</p>
                <p>&nbsp;&nbsp; • C/C++</p>

                <h3>&nbsp;Software Frameworks</h3>
                <p>&nbsp;&nbsp; • <strong>Front End:</strong> React, Vue, React Native</p>
                <p>&nbsp;&nbsp; • <strong>Back End:</strong> Java (Spring Boot, Spring Security, Spring Cloud); NodeJS (ExpressJS); Python (Flask, Django)</p>
                <p>&nbsp;&nbsp; • <strong>Testing:</strong> Java (JUnit); NodeJS (Mocha/Chai); Python (Pytest)</p>

                <h3>&nbsp;Databases</h3>
                <p>&nbsp;&nbsp; • <strong>SQL:</strong> MySQL, PostgreSQL</p>
                <p>&nbsp;&nbsp; • <strong>NoSQL:</strong> MongoDB, DynamoDB, Redis</p>

                <h3>&nbsp;Cloud Platforms</h3>
                <p>&nbsp;&nbsp; • AWS, GCP, Heroku</p>

                <h3>&nbsp;Tools</h3>
                <p>&nbsp;&nbsp; • Git, CI/CD, Docker, Kubernetes, Sentry (Production deployment monitoring)</p>
                <h2>&nbsp;Data Structures, Algorithms and Operating System</h2>
            </div>

            <Line />
            <div id="about" className="test marginLeft">
                <i className="fa-solid fa-address-card sameLine"></i>
                <h1 className="sameLine">About</h1>
                <div>A full stack developer</div>
            </div>

            <Line />
            <Footnote />

            <Float />
            <Clock />
            <Cards />
        </div>
    );

}

export default Home;