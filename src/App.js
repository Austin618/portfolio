import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from 'react-router-dom';
import Home from "./page/home/home";


const App = () => {
    return (
        <Router>
            {/*<Navigate from="/" to="/portfolio" />*/}
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
};


export default App;
