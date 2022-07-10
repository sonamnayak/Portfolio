import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {


    return (
        <nav className='flex justify-between bg-[#CB786C] pl-[20px] pr-[20px]'>
            <div>
            </div>
            <div className='flex gap-8 my-4 justify-evenly my-4 text-white text-sm'>
                <a href="#project">PROJECTS</a>
                <a href="#education">EDUCATION</a>
                <a href="#experience">EXPERIENCE</a>
                <a href="#certifications">CERTIFICATIONS</a>
                <a href="#contact">CONTACT</a>
            </div>
        </nav>
    );
}

export default Navbar;