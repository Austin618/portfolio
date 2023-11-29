import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from 'react-router-dom';
import Home from "./page/home/home";


const App = () => {
    return (
        <Router>
            {/*<Navigate from="/" to="/portfolio" />*/}
            <Routes>
                <Route path="/portifolio" element={<Home />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
};


export default App;
