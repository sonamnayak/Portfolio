import React from 'react';

const Project = () => {
	return(
		<div className="flex flex-col" id="project">
			<div className="text-[#CB786C] text-6xl text-center mb-6">PROJECTS</div>
		<div className="flex my-4">
			<div className="flex-1 pr-28">				
				<img className="w-[300px] h-[300px] m-auto bg-[#C5F2FB] mr-16" src="assests/intro.png" />
			</div>
			<div className="flex-1 flex flex-col justify-center mr-8">
				<div className="text-2xl font-semibold">Google Meet App</div>
				<div>Stack: React Js</div>
				<div>UI of Google Meet</div>
			</div>
		</div>
		<div className="flex  my-4">
			<div className="flex-1  pr-28">				<img className="w-[300px] h-[300px] m-auto bg-[#C5F2FB] mr-16" src="assests/intro.png" />
</div>
			<div className="flex-1 flex flex-col justify-center mr-8">
				<div className="text-2xl font-semibold">Keeper App</div>
				<div>Stack: eact, NodeJS.</div>
				<div>User can Add or Delete their work items.</div>
			</div>
		</div>
		<div className="flex  my-4">
			<div className="flex-1  pr-28">				<img className="w-[300px] h-[300px] m-auto bg-[#C5F2FB] mr-16" src="assests/intro.png" />
</div>
			<div className="flex-1 flex flex-col justify-center mr-8">
				<div className="text-2xl font-semibold">Museum Management Website- A&C Museum</div>
				<div>Stack: HTML5, CSS3, JavaScript</div>
				<div>A person can check the locations, various
art collections and can book themselves a
tour.
It also functions as an e-commerce
website, one can buy various art works
</div>
			</div>
		</div>
		</div>
		);
}

export default Project;