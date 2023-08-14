import React from 'react'

import './css/about.css'
import Nav from './Nav'
import {AiFillFacebook,AiFillTwitterSquare,AiFillYoutube} from 'react-icons/ai'





function About() {
  return (
    <div className='main-about-div' id='about'>
    <div className="container-fluid  master-about-border ">
   <Nav />
   <div className="container mt-lg-5 pt-lg-5 about-container ">
     
     <h1 className='text-light text-center pb-4 text-uppercase'>About <span style={{ color:'#FFA001' }}>Me</span></h1>
      <div className="about-mid">
      <div className="row">
      <h3 className=' pb-2 text-uppercase personal-info ' style={{ color:'#FFA001' }}><span className='border-bottom'>Personal</span> Info</h3>
      <div className="col-xl-7 col-lg-7 col-sm-10 text-light name-div">
       <div className="   name1 ">
       <h6 > <span style={{ color:'#D9D9DB',fontFamily:'open sans' }}>First Name: &nbsp;</span> mahdi</h6>
       <h6> <span style={{ color:'#D9D9DB',fontFamily:'open sans' }}>Age: &nbsp;</span> 27 Years</h6>
       <h6> <span style={{ color:'#D9D9DB',fontFamily:'open sans' }}>Freelance: &nbsp;</span> Available</h6>
       <h6> <span style={{ color:'#D9D9DB' ,fontFamily:'open sans'}}>Phone: &nbsp;</span> 01795802507</h6>
       <h6> <span style={{ color:'#D9D9DB',fontFamily:'open sans' }}>Education: &nbsp;</span>Hons. in English,Islamic Law</h6>
 
       
       </div>
       <div className="name2"> 
        <h6><span style={{ color:'#D9D9DB',fontFamily:'open sans' }}>Last Name: &nbsp;</span> Hasan</h6>
        <h6><span style={{ color:'#D9D9DB',fontFamily:'open sans' }}>Nationality: &nbsp;</span> Bangladeshi</h6>
        <h6><span style={{ color:'#D9D9DB',fontFamily:'open sans' }}>Nationality: &nbsp;</span> Bangladeshi</h6>
        <h6><span style={{ color:'#D9D9DB' ,fontFamily:'open sans'}}>Email: &nbsp;</span> hasanarefi56574@gmail.com</h6>
        <h6><span style={{ color:'#D9D9DB' ,fontFamily:'open sans'}}>Languages: &nbsp;</span> Bengali,English,Hindi</h6>
       
       </div>
         
       
 
      </div>
      <div className="col-xl-5 col-lg-5  col-sm-10    text-light  show-experience-div">
       <div className=" exp-year1 ">
       <h1 style={{ color:'#FFA001'  }} className='about-des-exp'  >2+</h1>
       <h5 >Years Of <br /> Experience</h5>
      
      
       <div className='mt-lg-5'>
       <h1 style={{ color:'#FFA001'  }} className='about-des-exp' >15+</h1>
       <h5 >Happy Customers</h5>
       </div>
      
       </div>
      
      
      <div className="exp-year  ">
       <h1 style={{ color:'#FFA001' }} className='about-des-exp' >20+</h1>
       <h5 >Compeletd <br /> Projects</h5>
      
       <div className="mt-lg-5">
       <h1 style={{ color:'#FFA001' }}  className='about-des-exp'>3+</h1>
       <h5 >Awards</h5>
       </div>
       
      
       </div>
      </div>
      </div>
     </div>
   
    
    
     
    
       
    </div>
    <div className='about-icons d-flex justify-content-center ms-lg-5 ps-lg-5 mt-lg-5'>
       <a href="https://www.facebook.com/profile.php?id=100011947547478&mibextid=ZbWKwL" className='p-3 mt-3 '><AiFillFacebook className='text-light fs-3 ' /></a>
       <a href="" className='p-3 mt-3'><AiFillTwitterSquare className='text-light fs-3 '  /></a>
       <a href="" className='p-3 mt-3'><AiFillYoutube className='text-light fs-3 ' /></a>
     </div>
   </div>
   </div>
   

  )
}

export default About
