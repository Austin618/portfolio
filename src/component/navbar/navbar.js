import React, {useRef} from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

import {Link} from "react-router-dom";
import Buttons from "../buttons/buttons";


const Navbar = ({currentLanguage}) => {
    const navRef = useRef(null);

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
        console.log(navRef.current);
    };

    const handleButtonClick = (navigate) => {
        requestAnimationFrame(() => {
            const element = document.getElementById(navigate);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        });
        if (window.innerWidth < 825) {
            showNavbar();
        }
    };

    let title, about, skills, projects, experience;

    switch (currentLanguage) {
        case 0:
            title = "Portfolio";
            experience = "Experience";
            projects = "Projects";
            skills = "Skills";
            about = "About";
            break;
        case 1:
            title = "ポートフォリオ";
            experience = "経験";
            projects = "プロジェクト";
            skills = "スキル";
            about = "について";
            break;
        case 2:
            title = "作品集";
            experience = "经验";
            projects = "项目";
            skills = "技能";
            about = "关于";
            break;
    }


    return (
        <header>
            <Link to="/"><button className="logoBox">{title}</button></Link>
            <nav ref={navRef}>

                <button type="" className="but type" onClick={() => handleButtonClick("experience")}>
                    {experience}
                </button>

                <button type="" className="but type" onClick={() => handleButtonClick("projects")}>
                    {projects}
                </button>

                <button type="" className="but type" onClick={() => handleButtonClick("skills")}>
                    {skills}
                </button>

                <button type="" className="but type" onClick={() => handleButtonClick("about")}>
                    {about}
                </button>

                <Buttons />

                <button
                    className="nav-btn nav-close-btn"
                    onClick={()=>{showNavbar()}}>
                    <FaTimes />
                </button>
            </nav>

            <button className="nav-btn" onClick={()=>{showNavbar()}}>
                <FaBars />
            </button>
        </header>
    );
};

export default Navbar;