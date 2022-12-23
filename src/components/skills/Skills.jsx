import React from 'react'

const Skills = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full mb-8" id="skills">
		  <div className="text-[#CB786C] text-4xl md:text-5xl text-center pt-[6vh] lg:pt-[10vh] pb-8">MY TOP SKILLS</div>
      <div className="grid grid-cols-2 md:grid-cols-3 w-9/12 lg:w-3/5 place-items-center">
        <div><img src="https://raw.githubusercontent.com/reactjs/reactjs.org/main/src/icons/logo.svg" alt="react" className="h-[55px] w-[55px] md:h-[80px] md:w-[80px] lg:h-[100px] lg:w-[100px]" /></div>
        <div><img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="node" className="h-[105px] w-[105px] md:h-[130px] md:w-[130px] lg:h-[150px] lg:w-[150px]" /></div>
        <div><img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="javascript" className="h-[55px] w-[55px] md:h-[80px] md:w-[80px] lg:h-[100px] lg:w-[100px]" /></div>
        <div><img src="https://vegibit.com/wp-content/uploads/2018/05/expressjs.png" alt="express" className="h-[40px] w-[135px] md:h-[40px] md:w-[160px] lg:h-[60px] lg:w-[180px]" /></div>
        <div><img src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" alt="mongo" className="h-[110px] w-[155px] md:h-[160px] md:w-[180px] lg:h-[180px] lg:w-[200px]" /></div>
        <div><img src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" alt="c++" className="h-[55px] w-[55px] md:h-[80px] md:w-[80px] lg:h-[100px] lg:w-[100px]" /></div>
      </div>
      <a  href="https://tinyurl.com/resumesonam" className="skills text-base md:text-lg px-6 py-2 rounded-3xl" target="_blank" rel="noreferrer">More Skills</a>
    </div>
  )
}

export default Skills