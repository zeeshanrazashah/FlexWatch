import React from 'react'
import { FaRankingStar } from "react-icons/fa6";
import { RiStarSmileFill } from "react-icons/ri";
import { PiBookmarkSimpleDuotone } from "react-icons/pi";
import { PiDotsThreeDuotone } from "react-icons/pi";

function Sidecontent() {
  return (<>
  <main className='m-5'>
  <h1 className='text-cyan-400 flex justify-center font-semibold text-2xl'>Side Contents</h1>
<aside className='m-5 hover:scale-110 hover:cursor-pointer scale-100 duration-500 ease-in-out hover:bg-white/20 w-auto flex p-2 rounded-xl hover:text-cyan-400 '>
<img src="/tw.png" className='w-48 h-24 bg-white items-center flex justify-center overflow-hidden bg-cover' />
<article className='grid'>
<h1 className='font-bold text-sm m-3 flex'>The Witcher gareil hunter of Rivia</h1>

<div className='m-2 flex space-x-1'>

<p className='text-gray-600 text-sm'>Views</p>
  <span className='text-sm text-gray-400'>80M</span>
</div>
<div className='flex justify-end'>

  <PiDotsThreeDuotone className='size-5 rotate-90  text-white'/>
</div>
</article></aside>
  
<aside className='m-5 hover:scale-110 hover:cursor-pointer scale-100 duration-500 ease-in-out hover:bg-white/20 w-auto flex p-2 rounded-xl hover:text-cyan-400 '>
<img src="/tw.png" className='w-48 h-24 bg-white items-center flex justify-center overflow-hidden bg-cover' />
<article className='grid'>
<h1 className='font-bold text-sm m-3 flex'>The Witcher gareil hunter of Rivia</h1>

<div className='m-2 flex space-x-1'>

<p className='text-gray-600 text-sm'>Views</p>
  <span className='text-sm text-gray-400'>80M</span>
</div>
<div className='flex justify-end'>

  <PiDotsThreeDuotone className='size-5 rotate-90  text-white'/>
</div>
</article></aside>

<aside className='m-5 hover:scale-110 hover:cursor-pointer scale-100 duration-500 ease-in-out hover:bg-white/20 w-auto flex p-2 rounded-xl hover:text-cyan-400 '>
<img src="/tw.png" className='w-48 h-24 bg-white items-center flex justify-center overflow-hidden bg-cover' />
<article className='grid'>
<h1 className='font-bold text-sm m-3 flex'>The Witcher gareil hunter of Rivia</h1>

<div className='m-2 flex space-x-1'>

<p className='text-gray-600 text-sm'>Views</p>
  <span className='text-sm text-gray-400'>80M</span>
</div>
<div className='flex justify-end'>

  <PiDotsThreeDuotone className='size-5 rotate-90  text-white'/>
</div>
</article></aside>
  </main>
  </>)
}

export default Sidecontent