import React, {useRef} from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

import {Link} from "react-router-dom";
import Buttons from "../buttons/buttons";


const Navbar = () => {
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


    return (
        <header>
            <Link to="/"><button className="logoBox">Portfolio</button></Link>
            <nav ref={navRef}>
                <button type="" className="but type" onClick={() => handleButtonClick("experience")}>
                    Experience
                </button>

                <button type="" className="but type" onClick={() => handleButtonClick("projects")}>
                    Projects
                </button>

                <button type="" className="but type" onClick={() => handleButtonClick("skills")}>
                    Skills
                </button>

                <button type="" className="but type" onClick={() => handleButtonClick("about")}>
                    About
                </button>


                {/*<Link to="/">*/}
                {/*    <button type="" className="buttonBox">*/}
                {/*        Resume*/}
                {/*    </button>*/}
                {/*</Link>*/}

                <Buttons />
                {/*<Link to="/">*/}
                {/*    <button type="" className="buttonBox">*/}
                {/*        Projects*/}
                {/*    </button>*/}
                {/*</Link>*/}

                {/*<Link to="/">*/}
                {/*    <button type="" className="buttonBox">*/}
                {/*        Projects*/}
                {/*    </button>*/}
                {/*</Link>*/}

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
// class Navbar extends React.Component {
//
//     constructor(props) {
//         super(props);
//         this.navRef = React.createRef();
//
//         this.state = {
//             channelId: "",
//         };
//     }
//
//     showNavbar = () => {
//         this.navRef.current.classList.toggle("responsive_nav");
//     };
//
//     handleButtonClick = (navigate) => {
//         // Smooth scroll to the #projects element
//         requestAnimationFrame(() => {
//             const element = document.getElementById(navigate);
//             if (element) {
//                 element.scrollIntoView({ behavior: 'smooth' });
//             }
//         });
//         if (window.innerWidth < 650) {
//             this.showNavbar();
//         }
//         // window.location.href = "#projects";
//     };
//
//     render() {
//         return (
//             <header>
//                 <Link to="/"><button className="logoBox">Portfolio</button></Link>
//                 <nav ref={this.navRef}>
//                     {/*<Link to="/"><button className="buttonBox">Home</button></Link>*/}
//                     {/*<Link to="/Channel"><button className="buttonBox">Channel</button></Link>*/}
//
//                     {/*<Link to="/projects">*/}
//                         <button type="" className="buttonBox" onClick={() => this.handleButtonClick("projects")}>
//                             Projects
//                         </button>
//                     {/*</Link>*/}
//                     {/*<Link to="/#skills">*/}
//                         <button type="" className="buttonBox" onClick={() => this.handleButtonClick("skills")}>
//                             Skills
//                         </button>
//                     {/*</Link>*/}
//                     <Link to="/">
//                         <button type="" className="buttonBox">
//                             Resume
//                         </button>
//                     </Link>
//
//                     <Buttons />
//                     {/*<Link to="/">*/}
//                     {/*    <button type="" className="buttonBox">*/}
//                     {/*        Projects*/}
//                     {/*    </button>*/}
//                     {/*</Link>*/}
//
//                     {/*<Link to="/">*/}
//                     {/*    <button type="" className="buttonBox">*/}
//                     {/*        Projects*/}
//                     {/*    </button>*/}
//                     {/*</Link>*/}
//
//                     <button
//                         className="nav-btn nav-close-btn"
//                         onClick={()=>{this.showNavbar()}}>
//                         <FaTimes />
//                     </button>
//
//
//
//                 </nav>
//                 <button className="nav-btn" onClick={()=>{this.showNavbar()}}>
//                     <FaBars />
//                 </button>
//             </header>
//         );
//     }
// }
//
// export default Navbar;