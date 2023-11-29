import React, {useRef, useState, useEffect} from 'react';
import './cards.css';

const Cards = () => {
    const handleButtonClick = (navigate) => {
        requestAnimationFrame(() => {
            const element = document.getElementById(navigate);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        });
    };

    return (
        <div className="container">
            <button className="card card--darker-blue" onClick={() => handleButtonClick("about")}>
                <div className="card__icon"></div>
                <div className="card__class">About</div>
            </button>
            <button className="card card--blue"  onClick={() => handleButtonClick("skills")}>
                <div className="card__icon"></div>
                <div className="card__class">Skills</div>
            </button>
            <button className="card card--dark-blue"  onClick={() => handleButtonClick("projects")}>
                <div className="card__icon"></div>
                <div className="card__class">Projects</div>
            </button>
            <button className="card"  onClick={() => handleButtonClick("experience")}>
                <div className="card__icon"></div>
                <div className="card__class">Experience</div>
            </button>
        </div>
    );
};

export default Cards;