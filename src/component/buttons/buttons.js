import React from 'react';
import './buttons.css';
import '@fortawesome/fontawesome-free/css/all.css';

const Buttons = () => {
    return (
        <div className="buttonFlex">

            {/* Add Font Awesome icons */}
            <a href="https://www.linkedin.com/in/qiming-ye/" className="fa-brands fa-linkedin" target="_blank" rel="noopener noreferrer"></a>
            <a href="https://github.com/Austin618?tab=repositories" className="fa-brands fa-github" target="_blank" rel="noopener noreferrer"></a>
            {/*<a href="#" className="fa fa-download"></a>*/}

            {/*<a href="#" className="fa-brands fa-youtube"></a>*/}

            {/*<a href="#" className="fa fa-gear"></a>*/}
            {/*<a href="#" className="fa fa-code"></a>*/}
            {/*<a href="#" className="fa fa-envelope"></a>*/}
            {/*<a href="#" className="fa fa-phone"></a>*/}
            {/*<a href="#" className="fa fa-map-location-dot"></a>*/}
        </div>
    );
};

export default Buttons;