import React from 'react';
import './cards.css';

const Cards = ({currentLanguage}) => {
    const handleButtonClick = (navigate) => {
        requestAnimationFrame(() => {
            const element = document.getElementById(navigate);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        });
    };

    let about, skills, projects, experience;

    switch (currentLanguage) {
        case 0:
            experience = "Experience";
            projects = "Projects";
            skills = "Skills";
            about = "About";
            break;
        case 1:
            experience = "経験";
            projects = "プロジェクト";
            skills = "スキル";
            about = "について";
            break;
        case 2:
            experience = "经验";
            projects = "项目";
            skills = "技能";
            about = "关于";
            break;
    }

    return (
        <div className="container">
            <button className="card card--darker-blue" onClick={() => handleButtonClick("about")}>
                <div className="card__icon"></div>
                <div className="card__class">{about}</div>
            </button>
            <button className="card card--blue"  onClick={() => handleButtonClick("skills")}>
                <div className="card__icon"></div>
                <div className="card__class">{skills}</div>
            </button>
            <button className="card card--dark-blue"  onClick={() => handleButtonClick("projects")}>
                <div className="card__icon"></div>
                <div className="card__class">{projects}</div>
            </button>
            <button className="card"  onClick={() => handleButtonClick("experience")}>
                <div className="card__icon"></div>
                <div className="card__class">{experience}</div>
            </button>
        </div>
    );
};

export default Cards;