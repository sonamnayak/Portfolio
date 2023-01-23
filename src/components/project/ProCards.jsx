import React from 'react';

const ProCards = (props) => {
	return (
	<div className="flex flex-col lg:flex-row my-4 relative w-full justify-center items-center">
			<div className="w-11/12 lg:w-10/12 lg:w-8/12 px-6 flex justify-center">				
				<img className="proimg rounded-md w-[800px] lg:h-[400px] m-auto hover:scale-[1.1]" src={props.src} alt="project" />
			</div>
			<div className="flex flex-col justify-center m-auto text-center w-10/12 md:w-6/12 lg:w-4/12 px-4">
				<div className="text-xl md:text-2xl font-semibold pt-6 lg:pt-4">{props.title}</div>
				<div className="text-gray-500 text-[12px] py-2">{props.stack}</div>
				<div className="text-[12px] md:text-[15px] text-gray-600">{props.description}</div>
				<br />
				<a href={props.link} className="github text-xs md:text-sm px-6 py-2 rounded-3xl" target="_blank" rel="noreferrer">GitHub</a>
			</div>
		</div>
	)
}

export default ProCards