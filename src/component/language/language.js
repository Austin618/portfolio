import React, {useState} from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import './language.css'
import {Link} from "react-router-dom";

const Language = ({currentLanguage, setCurrentLanguage}) => {
    // // currentLanguage = 0 en // 1 jp // 2 cn
    // const [currentLanguage, setCurrentLanguage] = useState(0);

    const switchLanguage = (language) => {
        setCurrentLanguage(language);
    };

    return (
        <div className="language-switch-container" style={{ '--language': currentLanguage }}>
            <div className="white-block" ></div>
            <button onClick={() => switchLanguage(0)} className={currentLanguage === 0 ? 'enActive' : ''}>
                EN
            </button>
            <button onClick={() => switchLanguage(1)} className={currentLanguage === 1 ? 'jpActive' : ''}>
                JP
            </button>
            <button onClick={() => switchLanguage(2)} className={currentLanguage === 2 ? 'chActive' : ''}>
                CN
            </button>
        </div>
    );
};

export default Language;