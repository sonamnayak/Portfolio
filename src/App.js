import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Intro from './components/intro/Intro';

import Project from './components/projects/Project';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Intro />
            <Project />
        </Router>
        ); 
}

export default App;

