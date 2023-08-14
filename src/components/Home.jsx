import React from 'react'
import photo from './cover2.png'
import {BsArrowLeftCircleFill} from 'react-icons/bs'

import '../components/css/master.css'
import Nav from './Nav'
export default function Master() {
  return (
    <div className='main-div'>
    <div className="container-fluid  master-border ">
   <Nav />
  
     <div className="container home-container-div">
     <div className="row">
     <div className="col-lg-4 ">
     <div className="image-div ">
     <img src={photo} alt="" />
     </div>
    
     </div>
     <div className="col-lg-8 col-xs-12 content-col-div ">
     <div className="content-div">
     
     
     <h1  className='d-inline '>- I'M Mahdi Hasan</h1>
     
     <h1 className='text-light'>React Js Developer</h1>
     <p className='text-light pt-lg-2 '>I'm a  professional React Js developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
 
     <button className=' about-me-btn'>More About Me <BsArrowLeftCircleFill className='btn-arrow' /> </button>
     </div>
     
     
     </div>
     </div>
     
     </div>
  
   
    </div>
      
    </div>
  )
}
