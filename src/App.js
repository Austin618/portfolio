import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from 'react-router-dom';
import Home from "./page/home/home";
import Jp from "./page/jp/jp";


const App = () => {
    return (
        <Router>
            {/*<Navigate from="/" to="/portfolio" />*/}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Home />} />

                <Route path="/portfolio/jp" element={<Jp />} />
            </Routes>
        </Router>
    );
};


export default App;
