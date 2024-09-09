import React from 'react'
import { CgMaze } from "react-icons/cg";
import { FaVuejs } from "react-icons/fa";
import { SiAirplayvideo } from "react-icons/si";
import { PiSmileyMeltingDuotone } from "react-icons/pi";
import { RiMovie2Fill } from "react-icons/ri";
import { SiFandom } from "react-icons/si";
import Gallery from './gallery/page';
import HighTop from './HighTop';
import StoryCard from './Headline';

function TopNav() {
  return (
    <nav>

<div className='grid text-cyan-400 ml-3'>
        <CgMaze className='size-20'/>

<ul className='flex flex-wrap gap-5'>
    <li className='bg-white/20 font-semibold p-5 h-12 w-40 items-center flex justify-center rounded-full duration-500 ease-in-out hover:bg-cyan-300 hover:shadow-cyan-400  shadow-md text-white cursor-pointer'>
    <SiAirplayvideo className='size-6 m-3 text-pink-500'/>
    <p className='text-white'>All</p> 
        </li>
    
        <li className='bg-white/20 font-semibold p-5 h-12 w-40 items-center 
        flex justify-center rounded-full duration-500 ease-in-out hover:bg-cyan-300 hover:shadow-cyan-400  shadow-md text-white cursor-pointer'>
    <PiSmileyMeltingDuotone className='size-6 m-3 text-teal-500'/>
    <p className='text-white'>Comedy</p> 
        </li>
    
        <li className='bg-white/20 font-semibold p-5 h-12 w-40 items-center flex justify-center rounded-full duration-500 ease-in-out hover:bg-cyan-300 hover:shadow-cyan-400  shadow-md text-white cursor-pointer'>
    <RiMovie2Fill className='size-6 m-3 text-slate-500'/>
    <p className='text-white'>Drama</p> 
        </li>
        <li className='bg-white/20 font-semibold p-5 h-12 w-40 items-center flex justify-center rounded-full duration-500 ease-in-out hover:bg-cyan-300 hover:shadow-cyan-400 shadow-md text-white cursor-pointer'>
    <SiFandom className='size-6 m-3 text-red-400'/>
    <p className='text-white'>Fantasy</p> 
        </li>
    </ul>


<aside className='m-5'>
<div className='md:flex justify-center grid items-center'>

<HighTop/>
<StoryCard/>
</div>
<Gallery/>
</aside>

</div>
       
   </nav>
  )
}

export default TopNav 