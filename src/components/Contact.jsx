import React from 'react'
import './contact.css'
import Nav from './Nav'
import {BsFillMapFill,BsSendFill} from 'react-icons/bs'
import {HiMailOpen} from 'react-icons/hi'
import {BiSolidPhoneCall} from 'react-icons/bi'
import {AiFillFacebook,AiFillTwitterSquare,AiFillYoutube} from 'react-icons/ai'
export default function Contact() {
  return (
    <div className='main-contact-div'>
    <div className="container-fluid  master-contact-border ">
    <Nav />
        <div className="container ">
        <h1 className='text-center contact-header '> <span className='text-light'>Get In  </span>Touch</h1>
        <div className="row">
        <div className="col-lg-6 pt-3 mt-lg-5">
         <h3 className='text-light' style={{ fontFamily:'poppins',fontWeight:'600' }}>DONT BE SHY !</h3>
         <h6 className='text-light para-contact'>Feel free to get in touch with me. I am always open to discussing new projects,<br /> creative ideas or opportunities to be part of your visions</h6>
         <div className='d-flex mt-4 '>
         <div className="address-icon-div ">
         <span className=''><BsFillMapFill className='ad-icon' style={{ color:'#FFB400' }} /> </span>
         </div>
         <div className="Adress ">
         <h6 className=' address-point '>ADDRESS POINT</h6>
         <h6 className='text-light'>Mirpur-01,&nbsp;Dhaka,&nbsp; Bangladesh</h6>
         </div>
         </div>
         <div className='d-flex mt-3 '>
         <div className="address-icon-div ">
         <span className=''><HiMailOpen className='ad-icon' style={{ color:'#FFB400' }} /> </span>
         </div>
         <div className="Adress ">
         <h6 className=' address-point '> Mail Me</h6>
         
         <h6 className='text-light'>hasanarefi56574@gmail.com</h6>
         </div>
         </div>
         <div className='d-flex mt-3 '>
         <div className="address-icon-div ">
         <span className=''><HiMailOpen className='ad-icon' style={{ color:'#FFB400' }} /> </span>
         </div>
         <div className="Adress ">
         <h6 className=' address-point '> Mail Me</h6>
         
         <h6 className='text-light'>hasanarefi56574@gmail.com</h6>
         </div>
         </div>
         <div className='d-flex mt-3 '>
         <div className="address-icon-div ">
         <span className=''><BiSolidPhoneCall className='ad-icon' style={{ color:'#FFB400' }} /> </span>
         </div>
         <div className="Adress ">
         <h6 className=' address-point '> Mail Me</h6>
         
         <h6 className='text-light'>hasanarefi56574@gmail.com</h6>
         </div>
         </div>
         
        </div>
        <div className="col-lg-6 pt-3 mt-lg-5">
        <form action="">
         <input type="text" className='name' placeholder='First Name'/>
         <input type="email" className='name ms-3'  placeholder='Your Mail' />
         <input type="text" className='w-100 mt-lg-5  bg-dark sub-mas ' placeholder='Your Subject' />
         <input type="text" className='w-100 mt-lg-5  bg-dark sub-mas  '  placeholder='Your Message'  />
        </form>
        <button className='send-btn'><span style={{ fontWeight:'bold' }}>Send Message </span> <BsSendFill  className=' send-message-icon' /></button>
         
      
        
        </div>
       
        </div>
       
        </div>
    </div>
    <div className='contact-icons d-flex justify-content-center ms-lg-5 ps-lg-5 mt-lg-5'>
    <a href="https://www.facebook.com/profile.php?id=100011947547478&mibextid=ZbWKwL" className='p-3 mt-3 '><AiFillFacebook className='text-light fs-3 ' /></a>
    <a href="" className='p-3 mt-3'><AiFillTwitterSquare className='text-light fs-3 '  /></a>
    <a href="" className='p-3 mt-3'><AiFillYoutube className='text-light fs-3 ' /></a>
  </div>
    </div>
  )
}
