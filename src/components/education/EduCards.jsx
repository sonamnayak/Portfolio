import React from 'react'

const EduCards = (props) => {
	return (
		<div className="my-4 pr-[50px] pl-[40px] py-[50px] edu-card">
			<div className="edu-content">
				<div className="text-center text-lg font-[900]">{props.degree}</div>
				<div className="my-4 font-[700]">{props.institute}</div>
				<div className="text-sm italic font-[700]">{props.marks}</div>
			</div>
		</div>
	)
}

export default EduCards