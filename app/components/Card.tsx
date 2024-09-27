import React from 'react'
import { IoTv } from "react-icons/io5";

import { TbArrowBadgeUpFilled } from "react-icons/tb";

function Card() {
  return (
    <article className='flex w-96'>
<aside className='bg-white/85  p-4 rounded-se-full text-gray-500 hover:text-black duration-500 ease-in-out'>
  <main className='rounded-es-full hover:scale-100 scale-95 hover:shadow-2xl shadow-black duration-500 ease-in-out bg-white/40 hover:bg-black/20 p-2'>
  <div className='flex'>
<h1 className='font-bold m-5 text-2xl text-cyan-500'>Tv Channel</h1>
  <IoTv className='bg-cyan-500/20 text-black p-1 m-2 rounded-xl size-20'/>
  </div>
  
<article className='gap-3 flex m-4 p-2'>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit debitis ullam repudiandae asperiores. Harum odio impedit in quae rem atque ad nulla nesciunt commodi. Repudiandae, odio sequi! Dicta, exercitationem odio?</article>  
  
<button className='flex justify-end font-bold bg-black/20 hover:bg-cyan-100 rounded-full p-2 text-cyan-900 duration-300 ease-in-out'> 
<TbArrowBadgeUpFilled className='size-10'/>
<animate className='absolute  animate-ping rounded-full size-3 bg-white border-cyan-600 border-2'/>
<animate className='absolute  animate-spin rounded-full size-3 bg-white border-cyan-600 border-2'/>
<animate className='absolute  animate-bounce rounded-full size-3 bg-white border-cyan-600 border-2'/>
</button>

  </main>
</aside>
</article>

  )
}

export default Card