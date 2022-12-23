import React, { useState } from 'react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
  
const ScrollButton = () =>{
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  }
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    })
  }
  
  window.addEventListener('scroll', toggleVisible)
  
  return (
    <button className="scroll z-10">
      <BsFillArrowUpCircleFill onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}} />
    </button>
  )
}
  
export default ScrollButton