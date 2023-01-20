import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Intro from './components/intro/Intro'
import Education from './components/education/Education'
import Project from './components/project/Project'
import Certifications from './components/certifications/Certifications'
import Experience from './components/experience/Experience'
import Skills from './components/skills/Skills'
import ScrollButton from './ScrollButton'
import Footer from './components/footer/Footer'

const App = () => {
    return (
        <Router>
            <Navbar />
            <Intro />
            <Project />
            {/* <Education /> */}
            <Experience />
            <Certifications />
            <Skills />
            <Footer />
            <ScrollButton />
        </Router>
        ); 
}

export default App;

