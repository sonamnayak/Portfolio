import React from 'react'

const Certifications = () => {
  return (
    <div className="" id="certifications">
		  <div className="text-[#CB786C] text-4xl md:text-5xl text-center pt-[6vh] lg:pt-[10vh] pb-8">CERTIFICATIONS</div>
      <div id="carouselDarkVariant" className="carousel slide carousel-fade carousel-dark relative w-full flex justify-center" data-bs-ride="carousel">
        
        <div className="carousel-indicators absolute bottom-0 flex justify-center p-0 mb-4 w-1/5 lg:w-1/2">
          <button data-bs-target="#carouselDarkVariant" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button data-bs-target="#carouselDarkVariant" data-bs-slide-to="1" aria-label="Slide 1"></button>
          <button data-bs-target="#carouselDarkVariant" data-bs-slide-to="2" aria-label="Slide 1"></button>
          <button data-bs-target="#carouselDarkVariant" data-bs-slide-to="3" aria-label="Slide 1"></button>
          <button data-bs-target="#carouselDarkVariant" data-bs-slide-to="4" aria-label="Slide 1"></button>
        </div>

        <div className="carousel-inner relative w-4/5 md:w-2/3 lg:w-1/2 overflow-hidden">
          
          <div className="carousel-item active relative float-left w-full">
            <img
              src="images/c/c1.png"
              className="block w-full"
              alt="certificate"
            />
          </div>

          <div className="carousel-item relative float-left w-full">
            <img
              src="images/c/c2.png"
              className="block w-full"
              alt="certificate"
            />
          </div>

          <div className="carousel-item relative float-left w-full">
            <img
              src="images/c/c3.png"
              className="block w-full"
              alt=" certificate"
            />
          </div>

          <div className="carousel-item relative float-left w-full">
            <img
              src="images/c/c4.png"
              className="block w-full"
              alt="certificate"
            />
          </div>

          <div className="carousel-item relative float-left w-full">
            <img
              src="images/c/c5.png"
              className="block w-full"
              alt="certificate"
            />
          </div>

          
        </div>

        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselDarkVariant"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselDarkVariant"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
	  </div>
  )
}

export default Certifications