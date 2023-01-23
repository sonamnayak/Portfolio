import React, {useEffect, useRef} from 'react'
import { init } from 'ityped'

const Intro = () => {

	const textRef = useRef();

	useEffect(() => {
		init(textRef.current, {
			showCursor: true,
			backDelay: 1500,
			backSpeed: 60,
			strings: ["MERN", "Full Stack"]
		})
	}, [])

	return (
		<div className="flex flex-col lg:flex-row mx-4 h-[93vh] pt-[7vh]">
			<div className="flex flex-[0.4] md:flex-1 flex-col justify-center items-center lg:items-start lg:pl-16">
				<div className="text-2xl md:text-4xl mb-4">Hello! I'm </div>
				<div className="text-4xl md:text-6xl mb-6 md:mb-4 text-[#CB786C] text-center lg:text-left">Sonam Nayak</div>
				<div className="text-lg md:text-2xl mb-6 md:mb-0">Web Developer <span ref={textRef} className="text-[#CB786C]"></span></div>
				<a href="https://tinyurl.com/resumesonam" className="arrow w-[180px] text-sm px-2 py-3" target="_blank" rel="noreferrer">Download Resume</a>
			</div>
			<div className="flex-[0.6] md:flex-1 flex justify-center" >
				<img className="intro w-[300px] md:w-[550px] lg:h-[500px] m-auto bg-[#C5F2FB]" src="images/intro.png" alt="intro" />
			</div>
		</div>
	)
}

export default Intro