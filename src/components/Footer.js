import React from 'react'
import img from '../assets/Footer/sb_white.png'
import fb from '../assets/Footer/fb.png'
import ln from '../assets/Footer/linkedin.png'
import twitter from '../assets/Footer/twitter.png'
import yt from '../assets/Footer/yt.png'
import insta from '../assets/Footer/insta.png'
function Footer() {
  return (
    <div className=' flex h-[50%]  w-full bg-[#0a428d] text-white' >
      {/* <img src={footer} className='w-full' alt='' ></img> */}
      <div className='flex  justify-center gap-10 mt-8 md:mr-10  md:ml-10 '>

      <div className='w-1/4 hidden md:flex flex-col' >
        <p className='mb-10'  >Quick Links</p>
        <a href="/">Home</a>
        <a>Pricing</a>
        <a>Blog</a>
        <a>FAQs</a>
        <a>Contact Us</a>
      </div>
      <div  className='w-1/4 hidden md:flex flex-col' > 
        <p className='mb-10' >Solutions For</p>
        <a>Automotive and Auto components</a>
        <a>Aerospace and Defence</a>
        <a>Chemical Industry</a>
        <a>Food Industry</a>
        <a>Pharma Industry</a>
        <a>Textile Industry</a>
        <a>More >></a>

      </div>
      <div  className='w-1/2 md:w-1/4 flex flex-col' >
        <p className=' mb-5 md:mb-10' >Reach Us</p>
        <a>Bangalore (Head Office)</a>
        <a>#249,2nd floor, 14th Main Rd, Sector7, H.S.R Layout, Bangalore - 560102.</a>
        <a>+91 9353714647</a>
        <a>0804217111</a>
        <a>info@solutionbuggy.com</a>
      </div>
      <div className='flex w-1/4 flex-col'>
        <div className='flex justify-center'>
        <img className='object-contain h-20  ' alt='' src={img}></img>
        </div>
        <div className='flex  justify-center  '>
          <div>
          <img className=' ' alt='' src={fb} ></img>
          </div>
          <div>
          <img className=''alt='' src={ln} ></img>
          </div>

          <div>
          <img className=''alt='' src={twitter} ></img>
          </div>
        
        <div>
        <img className='' alt=''src={yt} ></img>
        </div>

        <div>
        <img className=''alt='' src={insta} ></img>

        </div>
        
        
        
        </div>
        
      </div>

      </div>
      

    </div>
  )
}

export default Footer