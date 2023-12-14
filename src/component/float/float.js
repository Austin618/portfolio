import React, {useState, useEffect} from 'react';
import './float.css';
import '@fortawesome/fontawesome-free/css/all.css';

const Float = ({currentLanguage}) => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show the button when the user scrolls down
            const isScrolled = window.scrollY > 80;
            setShowButton(isScrolled);
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Remove event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        // Smoothly scroll to the top of the page
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    let resume, link;

    switch (currentLanguage) {
        case 0:
            resume = "Resume";
            link = "https://drive.google.com/drive/folders/1Dbs5Vor26mQpplkiscACGydmZ7q0oJ1A?usp=sharing"
            break;
        case 1:
            resume = "履歴書";
            link = "https://drive.google.com/drive/folders/1tdp6LAlXEe76RcE5bH-SXzCnzlJ_cwnU?usp=sharing"
            break;
        case 2:
            resume = "简历";
            link = "https://drive.google.com/drive/folders/1Dbs5Vor26mQpplkiscACGydmZ7q0oJ1A?usp=sharing"
            break;
    }

    return (
        <div>
            <div className="scrollToTop">
                {showButton && (
                    <button onClick={scrollToTop} className="fa-solid fa-arrow-up" />
                )}
            </div>
            <div style={{ position: 'fixed', bottom: '20px', right: '20px', display: 'flex', alignItems: 'center', zIndex: '10' }}>
                <h2 style={{ marginRight: '3px', marginBottom: '0', background: '#414141', color:'white', borderRadius:'10px', padding:'3px' }}>{resume}</h2>

                <a href={link} className="fa fa-download" target="_blank" rel="noopener noreferrer">
                </a>
            </div>

        </div>
    );
};

// return (
//         <div className="buttonFloat">
//
//             {/* Add Font Awesome icons */}
//             <a href="https://www.linkedin.com/in/qiming-ye/" className="fa-brands fa-linkedin"></a>
//             <a href="https://github.com/Austin618?tab=repositories" className="fa-brands fa-github"></a>
//             {/*<a href="#" className="fa fa-download"></a>*/}
//
//             {/*<a href="#" className="fa-brands fa-youtube"></a>*/}
//
//             {/*<a href="#" className="fa fa-gear"></a>*/}
//             {/*<a href="#" className="fa fa-code"></a>*/}
//             {/*<a href="#" className="fa fa-envelope"></a>*/}
//             {/*<a href="#" className="fa fa-phone"></a>*/}
//             {/*<a href="#" className="fa fa-map-location-dot"></a>*/}
//         </div>
//     );
// };

export default Float;