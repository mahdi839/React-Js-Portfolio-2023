import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2';
import Nav from '../Nav'
import './skills.css'
import photo1 from './photos/darul.jpg'
import photo2 from './photos/shop.jpg'
import photo3 from './photos/country.jpg'
import photo4 from './photos/res2.jpg'
import ProgressBar from './ProgressBar'
export default function Skills() {
  return (
    <div>
    
    <div className='main-div'>
    <div className="container-fluid  master-skills-border">
   <Nav />
   <div className="container">
   <div className="row">
   <div className="col-lg-6 col-md-12 col-sm-12">
   <h1 className='text-center portfolio pt-4'>Portfolio</h1>
  
    <div className="portfolio-img-div ">
    
    <a href="https://darululoomacademy.com/" className='p-4' target='blank'><img src={photo1} alt="" /></a>
    <a href="https://darululoomacademy.com/" className='p-4' target='blank'><img src={photo2} alt="" /></a>
    <a href="https://darululoomacademy.com/" className='p-4' target='blank'><img src={photo3} alt="" /></a>
    <a href="https://darululoomacademy.com/" className='p-4' target='blank'><img src={photo4} alt="" /></a>
   
    </div>
   
   </div>
   <div className="col-lg-6 col-md-12 col-sm-12 mb-sm-5 sk-pro">
   <ProgressBar />
   
   
   </div>
   </div>
   </div>
   </div>
   </div>
 
    </div>
  )
}
