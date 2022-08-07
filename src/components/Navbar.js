import React, {useState} from 'react'
import {AiOutlineClose , AiOutlineMenu} from 'react-icons/ai'
import logo from '../assets/sb_white 1.png'
import vector from '../assets/Vector 1.png'
import login1 from '../assets/login 1.png'
function Navbar() {
    const [nav, setNav]=useState(true)
    const handleNav = () => {
        setNav(!nav)
    }
  return (

    <div className=' flex justify-between bg-[#0A438D] items-center h-[195] w-full   text-white'>
        <img className='w-[221px] h-[114.99px] ml-20 ' src={logo} alt='logo' ></img>
        
        <ul className='hidden  md:flex justify-center items-center'>
            <li className='p-4 '>Find Expert</li>
            <img className='h-[33px] mt-2 ' src={vector} alt=''></img>
            <li className='p-4'>View Project </li>
            <img className='h-[33px] mt-2 ' src={vector} alt=''></img>
            <li className='p-4'>Business Ideas</li>
            <img className='h-[33px] mt-2 ' src={vector} alt=''></img>
            <li className='p-4'>About Us</li>
            <img className='h-[33px] mt-2 ' src={vector} alt=''></img>
            <li className='p-4'>Blog</li>
            <img className='h-[33px] mt-2 ' src={vector} alt=''></img>
            <li className='p-4'>Events</li>
            <img className='h-[33px] mt-2 ' src={vector} alt=''></img>
            <li className='p-4'>Career</li>
            <div className='flex m-4'>
            <button className='bg-[#FF661B] w-32 h-[50px] flex m-auto p-3 rounded-l-[14px] ' >
                <img src={login1} className='mx-1' ></img>
                Register</button>
            <button className='bg-white text-black 
            font-medium
             w-20 p-3 m-auto  h-[50px] rounded-tr-[17px] ' >Login</button>

            </div>
            
        </ul>
        <div onClick={handleNav} className='block md:hidden' >
            {!nav ?  <AiOutlineClose size={20} className='mr-4 ' /> : <AiOutlineMenu size={20} className='mr-4' />}
          
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r bg-[#000300]  border-r-gray-900 duration-500' : 'fixed left-[-100%] '}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4 '>React.</h1>
            <ul className='p-4 uppercase'>
            <li className='p-4 border-b border-gray-600'>Home</li>
            <li className='p-4 border-b border-gray-600'>Company</li>
            <li className='p-4 border-b border-gray-600'>Resources</li>
            <li className='p-4 border-b border-gray-600'>About</li>
            <li className='p-4'>Contact</li>
            </ul>
        </div>
    
    </div>
  )
}

export default Navbar