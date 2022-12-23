import React from 'react'
import EduCards from './EduCards'

const Education = () => {
	return (
		<div id="education">
			<div className="text-[#CB786C] text-4xl md:text-5xl text-center pt-[6vh] lg:pt-[10vh] pb-8">EDUCATION</div>
			<div id="education" className="flex justify-evenly">
				<EduCards degree="B. TECH, CSE" institute="Lovely Professional University" marks="CGPA: 8.49" className="flex-1" />
				<EduCards degree="XII" institute="Army Public School, Narangi" marks="Percentile: 67.4" className="flex-1" />
				<EduCards degree="X" institute="Army Public School, Narangi" marks="Percentile: 92.1" className="flex-1" />
			</div>
		</div>
	)
}

export default Education
