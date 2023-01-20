import React, { useState } from 'react';
import { IoMdMail } from 'react-icons/io'
import { AiFillGithub, AiFillLinkedin, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return (
        <nav className='navbar flex justify-end md:justify-center lg:justify-end bg-[#CB786C] px-[30px] h-[7vh] fixed w-full z-20'>
            <div className="dropdown my-auto">
                <AiOutlineMenu size={30} className="text-white" onClick={() => setIsNavExpanded(!isNavExpanded)} />
            </div>
            <div className={isNavExpanded ? "nav expanded flex gap-6 my-auto text-lg md:text-base text-white" 
                                          : "nav flex gap-6 my-auto text-lg md:text-base text-white"}>
                <a href="#skills" className="pt-2 md:pt-0">SKILLS</a>
                <a href="#project">PROJECTS</a>
                {/* <a href="#education">EDUCATION</a> */}
                <a href="#experience">EXPERIENCE</a>
                <a href="#certifications">CERTIFICATIONS</a>
                <a href="!#">
                    <div className="grid grid-cols-3 gap-x-3 text-3xl md:text-xl">
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sonamnayak2710@gmail.com" target="_blank" rel="noreferrer"><IoMdMail /></a>
                        <a href="https://github.com/sonamnayak/" target="_blank" rel="noreferrer"><AiFillGithub /></a>
                        <a href="http://www.linkedin.com/in/sonamnayak/" target="_blank" rel="noreferrer"><AiFillLinkedin /></a>
                    </div>
                </a>
            </div>
        </nav>
    )
}

export default Navbar