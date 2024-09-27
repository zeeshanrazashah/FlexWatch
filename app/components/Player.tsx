import React from 'react'
import { CiPlay1 } from "react-icons/ci";
import { TbPlayerSkipForward } from "react-icons/tb";
import { IoPlaySkipBackOutline } from "react-icons/io5";
import { IoPlaySkipForwardOutline } from "react-icons/io5";
import { MdPlayForWork } from "react-icons/md";
import { GiSpeaker } from "react-icons/gi";
import { RiStarSmileFill } from "react-icons/ri";
import { RiStarSmileLine } from "react-icons/ri";
import { BsFullscreen } from "react-icons/bs";

function Player() {
  return (
    <main>        
<div className='h-[500px] w-[750px] ring-gray-400 shadow-2xl shadow-cyan-100 m-5 rounded-xl ring-2 grid place-content-end'>
    <aside className='flex'>   
<footer className='items-center grid text-cyan-500 hover:bg-black/20 hover:text-cyan-100 text-transparent rounded-md hover:m-3 hover:cursor-pointer duration-500 ease-in-out'>
<div className='rounded-full flex justify-center mb-4'>

<div className='flex justify-center'>
<button className='rounded-es-full hover:rounded-full hover:text-cyan-300 hover:bg-cyan-50/40  hover:w-auto duration-500 ease-in-out'>
<IoPlaySkipBackOutline className='size-7 m-1'/></button>

<button className='rounded-none hover:rounded-xl hover:text-cyan-300 hover:bg-cyan-50/40 hover:w-auto duration-500 ease-in-out'>
<CiPlay1 className='size-7 m-1'/></button>

<button className='rounded-se-full hover:rounded-full hover:text-cyan-300 hover:bg-cyan-50/40  hover:w-auto duration-500 ease-in-out'>
<IoPlaySkipForwardOutline className='size-7 m-1'/></button>
</div>

<button className='rounded-none hover:rounded-xl hover:text-cyan-300 hover:bg-cyan-50/40 hover:w-auto duration-500 ease-in-out'>
<BsFullscreen className='size-5 m-1'/></button>

    </div>

    <p className='flex justify-center text-sm font-mono'>1:23:00</p>
    <div className='w-[700px] h-1 hover:h-3 hover:bg-cyan-200 bg-cyan-400 ease-in-out duration-500 rounded-lg mr-8'/>

</footer>

</aside>
</div>

<div className='rounded-full flex justify-between bg-black/10 mb-4'>
<article className='ml-5'>
<h1 className='text-2xl font-bold '>Planate of Apss appoclipse</h1>
<div className='flex justify-end bg-white/25 rounded-2xl w-36 skew-x-12'>
<h2 className='mt-3 font-semibold text-sm'>Viewers </h2>
<p className='m-3 text-lg text-cyan-200 font-medium'>60M</p>
</div>
</article>


<aside className='flex'>
<button className='rounded-se-full hover:rounded-full  hover:text-cyan-300 hover:bg-cyan-50/40  hover:w-auto duration-500 ease-in-out'>
<MdPlayForWork className='size-8 m-1'/></button>

<button className='rotate-180 rounded-se-full hover:rounded-full hover:text-cyan-300 hover:bg-cyan-50/40 hover:w-auto duration-500 ease-in-out'>
<RiStarSmileLine className='size-7 m-1'/></button>


<button className=' rounded-se-full hover:rounded-full hover:text-cyan-300 hover:bg-cyan-50/40 hover:w-auto duration-500 ease-in-out'>
<RiStarSmileFill className='size-7 m-1'/></button>
</aside>
    </div>
  <div className='flex justify-end'><div className='w-40'>
<button className='flex justify-end font-bold bg-cyan-500/30 hover:bg-white/50 rounded-full duration-300 ease-in-out'> 
    <p className='m-2 p-1 font-medium text-base'>
     Co-Sign with us</p>
<animate className='absolute  animate-ping rounded-full size-2 bg-cyan-300 border-cyan-300 border-2'/>
</button>
  </div></div>
<aside>
 
  </aside>    

    </main>
  )
}

export default Player