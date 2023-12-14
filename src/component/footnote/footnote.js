import React from 'react';
import './footnote.css';
import '@fortawesome/fontawesome-free/css/all.css';
import {Link} from "react-router-dom";

const Footnote = ({currentLanguage}) => {

    let mobile;

    switch (currentLanguage) {
        case 0:
            mobile = "(+1)-416-893-2845";
            break;
        case 1:
            mobile = "(+81)-070-8556-0519";
            break;
        case 2:
            mobile = "(+86)-186-4266-5708";
            break;
    }

    return (
        <div>
            <div className="marginLeft">
                <i className="fa fa-envelope"></i>
                qiming.ye@mail.utoronto.ca<br />
                <i className="fa fa-phone"></i>
                {mobile}
            </div>

            <div className="footnote">
                {/* Add Font Awesome icons */}
                <a href="https://www.linkedin.com/in/qiming-ye/" className="fa-brands fa-linkedin" target="_blank" rel="noopener noreferrer"></a>
                <a href="https://github.com/Austin618?tab=repositories" className="fa-brands fa-github" target="_blank" rel="noopener noreferrer"></a>

            </div>

            {/*<a href="#" className="fa-brands fa-youtube"></a>*/}

            {/*<a href="#" className="fa fa-gear"></a>*/}
            {/*<a href="#" className="fa fa-code"></a>*/}
            {/*<a href="#" className="fa fa-envelope"></a>*/}
            {/*<a href="#" className="fa fa-phone"></a>*/}
            {/*<a href="#" className="fa fa-map-location-dot"></a>*/}
        </div>
    );
};

export default Footnote;