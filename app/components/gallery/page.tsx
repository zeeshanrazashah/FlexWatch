import React from 'react'
import { FaRankingStar } from "react-icons/fa6";
import { RiStarSmileFill } from "react-icons/ri";
import { PiBookmarkSimpleDuotone } from "react-icons/pi";
import { PiDotsThreeDuotone } from "react-icons/pi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { CiPlay1 } from "react-icons/ci";



function Gallery() {

return (<>

<h1 className='my-7 text-2xl font-bold'>Special Content</h1>
  <main className='text-white flex flex-wrap sm:w-auto'>
<aside className='m-4 hover:skew-x-6 hover:scale-110 hover:cursor-pointer scale-100 duration-500 ease-in-out hover:bg-white/20 w-52 grid place-content-center p-2 rounded-2xl hover:text-cyan-400 '>
<span className='hover:scale-150 hover:-skew-x-6 duration-500 ease-in-out'>

<AiOutlineLoading3Quarters className='size-9 absolute left-3 top-3 text-cyan-700 shadow-lg shadow-cyan-400 rounded-full animate-spin'/>

<img src="/wolf.jpg" className='w-48 h-24  bg-white rounded-xl items-center flex justify-center overflow-hidden bg-cover' />
</span>
<h1 className='font-semibold text-base mt-3 flex'>The Red Wolf 
  <span className='text-sm text-gray-600 mx-2 mt-1'>2023</span>
  <div className='flex gap-2 mt-1'>
  <RiStarSmileFill className='size-5 text-yellow-500'/>
  <span className='text-sm text-gray-600'>8.4</span>
  </div>
  </h1>
<p className='text-gray-600 text-sm'>Season</p>
<div className='flex justify-end'>
<PiDotsThreeDuotone className='size-5 rotate-90 flex justify-center text-white'/>
</div>
</aside>

<aside className='m-4 hover:skew-x-6 hover:scale-110 hover:cursor-pointer scale-100 duration-500 ease-in-out hover:bg-white/20 w-52 grid place-content-center p-2 rounded-2xl hover:text-cyan-400 '>
<PiBookmarkSimpleDuotone className='size-7 absolute right-3 top-3 text-cyan-700 shadow-black shadow-md  '/>
<img src="/tw.png" className='w-48 h-24 bg-white rounded-xl items-center flex justify-center overflow-hidden bg-cover' />
<h1 className='font-semibold text-base mt-3 flex '>The Witcher 
  <span className='text-sm text-gray-600 mx-2 mt-1'>2019 
  </span>
  <div className='flex gap-2 mt-1'>
  <RiStarSmileFill className='size-5 text-yellow-500'/>
  <span className='text-sm text-gray-600'>8.2</span>
  </div>
  </h1>
<p className='text-gray-600 text-sm'>Season</p>
<div className='flex justify-end'>
<PiDotsThreeDuotone className='size-5 rotate-90 flex justify-center text-white'/>
</div>

</aside>



<aside className='m-4 hover:skew-x-6 hover:scale-110 hover:cursor-pointer scale-100 duration-500 ease-in-out hover:bg-white/20 w-52 grid place-content-center p-2 rounded-2xl hover:text-cyan-400'>

<PiBookmarkSimpleDuotone className='size-7 absolute right-3 top-3 text-cyan-700 shadow-black shadow-md  '/>
<img src="/R.jpeg" className='w-48 h-24 bg-white rounded-xl items-center flex justify-center overflow-hidden bg-cover' />

<h1 className='font-semibold text-base mt-3 flex '>The Mandolorian 
  <span className='text-sm text-gray-600 mx-2 mt-1'>2021 
  </span>
  <div className='flex gap-2 mt-1'>

  <RiStarSmileFill className='size-5 text-yellow-500'/>
  <span className='text-sm text-gray-600'>7.9</span>
  </div>
  
  </h1>
<p className='text-gray-600 text-sm'>Season</p>
<div className='flex justify-end'>
<PiDotsThreeDuotone className='size-5 rotate-90 flex justify-center text-white'/>
</div>

</aside>


<aside className='m-4 hover:skew-x-6 hover:scale-110 hover:cursor-pointer scale-100 duration-500 ease-in-out hover:bg-white/20 w-52 grid place-content-center p-2 rounded-2xl hover:text-cyan-400 '>
<img src="/kal.jpg" className='w-48 h-24 bg-white rounded-xl items-center flex justify-center overflow-hidden bg-cover' />
<h1 className='font-semibold text-base mt-3 flex '>Kalki Avatar 
  <span className='text-sm text-gray-600 mx-2 mt-1'>2024 
  </span>
  <div className='flex gap-2 mt-1'>
  <RiStarSmileFill className='size-5 text-yellow-500'/>
  <span className='text-sm text-gray-600'>7.9</span>
  </div>
  </h1>
<p className='text-gray-600 text-sm'>Season</p>
<div className='flex justify-end'>
<PiDotsThreeDuotone className='size-5 rotate-90 flex justify-center text-white'/>
</div>

</aside>

<aside className='m-4 hover:skew-x-6 hover:scale-110 hover:cursor-pointer scale-100 duration-500 ease-in-out hover:bg-white/20 w-52 grid place-content-center p-2 rounded-2xl hover:text-cyan-400 '>
<img src="/app.jpg" className='w-48 h-24 bg-white rounded-xl items-center flex justify-center overflow-hidden bg-cover' />
<h1 className='font-semibold text-base mt-3 flex '>The Kindom of the Apps
  <span className='text-sm text-gray-600 mx-2 mt-1'>2019 
  </span>
  <div className='flex gap-2 mt-1'>
  <RiStarSmileFill className='size-5 text-yellow-500'/>
  <span className='text-sm text-gray-600'>7.9</span>
  </div>
  </h1>
<p className='text-gray-600 text-sm'>Season</p>
<div className='flex justify-end'>
<PiDotsThreeDuotone className='size-5 rotate-90 flex justify-center text-white'/>
</div>

</aside>



<aside className='m-4 hover:skew-x-6 hover:scale-110 hover:cursor-pointer scale-100 duration-500 ease-in-out hover:bg-white/20 w-52 grid place-content-center p-2 rounded-2xl hover:text-cyan-400 '>
<img src="/dpw.jpg" className='w-48 h-24 bg-white rounded-xl items-center flex justify-center overflow-hidden bg-cover' />
<h1 className='font-semibold text-base mt-3 flex '>Deadpool & Wolvarine 
  <span className='text-sm text-gray-600 mx-2 mt-1'>2024 
  </span>
  <div className='flex gap-2 mt-1'>
  <RiStarSmileFill className='size-5 text-yellow-500'/>
  <span className='text-sm text-gray-600'>7.9</span>
  </div>
  </h1>
<p className='text-gray-600 text-sm'>Season</p>
<div className='flex justify-end'>
<PiDotsThreeDuotone className='size-5 rotate-90 flex justify-center text-white'/>
</div>

</aside>


<aside className='m-4 hover:skew-x-6 hover:scale-110 hover:cursor-pointer scale-100 duration-500 ease-in-out hover:bg-white/20 w-52 grid place-content-center p-2 rounded-2xl hover:text-cyan-400 '>
<img src="/max.jpg" className='w-48 h-24 bg-white rounded-xl items-center flex justify-center overflow-hidden bg-cover' />
<h1 className='font-semibold text-base mt-3 flex '>Mad Max Furiousa
  <span className='text-sm text-gray-600 mx-2 mt-1'>2023 
  </span>
  <div className='flex gap-2 mt-1'>
  <RiStarSmileFill className='size-5 text-yellow-500'/>
  <span className='text-sm text-gray-600'>7.9</span>
  </div>
  </h1>
<p className='text-gray-600 text-sm'>Season</p>
<div className='flex justify-end'>
<PiDotsThreeDuotone className='size-5 rotate-90 flex justify-center text-white'/>
</div>

</aside>


<aside className='m-4 hover:skew-x-6 hover:scale-110 hover:cursor-pointer scale-100 duration-500 ease-in-out hover:bg-white/20 w-52 grid place-content-center p-2 rounded-2xl hover:text-cyan-400 '>
<img src="/mi.jpg" className='w-48 h-24 bg-white rounded-xl items-center flex justify-center overflow-hidden bg-cover' />
<h1 className='font-semibold text-base mt-3 flex '>The Ministery Urgency
  <span className='text-sm text-gray-600 mx-2 mt-1'>2019 
  </span>
  <div className='flex gap-2 mt-1'>
  <RiStarSmileFill className='size-5 text-yellow-500'/>
  <span className='text-sm text-gray-600'>7.3</span>
  </div>
  </h1>
<p className='text-gray-600 text-sm'>Season</p>
<div className='flex justify-end'>
<PiDotsThreeDuotone className='size-5 rotate-90 flex justify-center text-white'/>
</div>

</aside>


<aside className='m-4 hover:skew-x-6 hover:scale-110 hover:cursor-pointer scale-100 duration-500 ease-in-out hover:bg-white/20 w-52 grid place-content-center p-2 rounded-2xl hover:text-cyan-400 '>
<img src="/alier.jpg" className='w-48 h-24 bg-white rounded-xl items-center flex justify-center overflow-hidden bg-cover'/>
<h1 className='font-semibold text-base mt-3 flex '>Alien Moon 
  <span className='text-sm text-gray-600 mx-2 mt-1'>2019 
  </span>
  <div className='flex gap-2 mt-1'>
  <RiStarSmileFill className='size-5 text-yellow-500'/>
  <span className='text-sm text-gray-600'>6.8</span>
  </div>
  </h1>
<p className='text-gray-600 text-sm'>Season</p>
<div className='flex justify-end'>
<PiDotsThreeDuotone className='size-5 rotate-90 flex justify-center text-white'/>
</div>

</aside>

  </main>
  </>)
}

export default Gallery