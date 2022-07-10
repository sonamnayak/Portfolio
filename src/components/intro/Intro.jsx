import React, {useEffect, useRef} from 'react';
import './intro.css';
import { init } from 'ityped'

const Intro = () => {

	const textRef = useRef();

	useEffect(() => {
		init(textRef.current, {
			showCursor: true,
			backDelay: 1500,
			backSpeed: 60,
			strings: ["Full Stack", "MERN Stack"]
		})
	}, [])

	return (
		<div className="flex my-12 mx-4">
			<div className="flex flex-1 flex-col justify-center pl-16 ">
				<div className="text-4xl mb-4">Hello! I'm </div>
				<div className="text-6xl mb-4 text-[#CB786C]">Sonam Nayak</div>
				<div className="text-2xl">Web Developer <span ref={textRef} className="text-[#CB786C]"></span></div>
				<a href="https://drive.google.com/file/d/1mJLt0vZpwZPoxbfT9TPuPEKUxtZXfdix/view?usp=sharing" className="button arrow w-[180px] text-sm px-2 py-3">Download Resume</a>
			</div>
			<div className="flex-1">
				<img className="w-[500px] h-[450px] m-auto bg-[#C5F2FB] mr-16" src="assests/intro.png" />
			</div>
		</div>
		);
}

export default Intro;