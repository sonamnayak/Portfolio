import React from 'react'

const Experience = () => {
  return (
    <div className="w-full" id="experience">
		  <div className="text-[#CB786C] text-4xl md:text-5xl text-center pt-[6vh] lg:pt-[10vh] pb-8">EXPERIENCE</div>
      <div className="flex justify-evenly flex-col lg:flex-row w-9/12 mx-auto md:w-auto">

        <div class="flex justify-center mb-8 md:mb-16 lg:mb-0">
          <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="https://drive.google.com/file/d/1ulGDQAgWeJ9Qxsuc1i_ENOtw00QNpUJw/view?usp=sharing" target="_blank" rel="noreferrer">
              <img class="rounded-t-lg" src="images/e/e1.jpg" alt="aas" />
            </a>
            <div class="p-6">
              <h5 class="text-gray-900 text-lg md:text-xl font-medium mb-2">Ananth Agri Services LLP</h5>
              <p class="text-gray-700 text-xs md:text-sm 2xl:text-base mb-4">
                My role was to create a blog site for the company and manage it. I was involved in both frontend and backend part.
              </p>
              <p class="text-gray-600 text-xs lg:text-sm italic mb-1">Web Developer Intern</p>
              <p class="text-gray-600 text-xs italic">Oct 2020 - Jun 2021</p>
            </div>
          </div>
        </div>

        <div class="flex justify-center">
          <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="https://drive.google.com/file/d/1Kifzb1BPCsT8DrRxkBSVCsYqUvXtwoLZ/view?usp=sharing" target="_blank" rel="noreferrer">
              <img class="rounded-t-lg" src="images/e/e2.jpg" alt="aas" />
            </a>
            <div class="p-6">
              <h5 class="text-gray-900 text-lg md:text-xl font-medium mb-2">Factum Organisation</h5>
              <p class="text-gray-700 text-xs md:text-sm 2xl:text-base mb-4">
              This organisation comes under the aegis of DSW, LPU. My role is to manage my team and oranize various hackathons and coding events.
              </p>
              <p class="text-gray-600 text-xs lg:text-sm italic mb-1">CTO</p>
              <p class="text-gray-600 text-xs italic">Aug 2020 - Present</p>
            </div>
          </div>
        </div>

      </div>
	</div>
  )
}

export default Experience