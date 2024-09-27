import React from 'react'
import { IoTv } from "react-icons/io5";
import { PiHighDefinition } from 'react-icons/pi';
import Card from './Card';

function UserProfile() {
  return (<>
  <main>


<div className='-skew-x-6 scale-95 rounded-xl h-80 bg-cyan-100/20 shadow-2xl shadow-white overflow-hidden'>
<img src="/winnew.png" className='w-full bg-cover bg-center opacity-75'/>
</div>

<aside className='bg-white/85  p-4 rounded-se-full'>
  <main className='flex justify-evenly rounded-ee-full hover:scale-100 scale-95 hover:shadow-2xl shadow-black duration-500 ease-in-out bg-white/40 p-2'>
 <aside className='p-2'>

  <img src="/u.png" className=" h-20 rounded-full " />
<h1 className='font-mono m-5 text-4xl text-cyan-500'>Shelron Troid</h1>
  
<article>
<button className='flex justify-end font-bold bg-cyan-700/60 hover:bg-black/30 rounded-full duration-300 ease-in-out'> 
    <h1 className='m-2 p-1 font-medium text-base'>
      Co-Sign with us</h1>
<animate className='absolute  animate-ping rounded-full size-2 bg-cyan-600 border-cyan-600 border-2'/>
</button>
</article>
<div className='m-2 flex font-semibold text-black text-xl gap-2'>
<h2 className='text-black/50'>CoSigners </h2><p className='text-cyan-400/40'>|</p>
<h2>120</h2><p className='text-cyan-500 font-bold'>M</p>
</div>
 
  <div className='gap-3 space-x-2 font-bold p-2 bg-cyan-100/40 rounded-lg text-black grid place-content-center items-center md:flex flex-wrap my-3'>
  <h3>Programming</h3>
  <h3> Education</h3>
  <h3>Code</h3>
  <h3>Skill</h3>
  </div>
  </aside>  
  
  <div><Card /></div>
  </main>
</aside>

  </main>
  </>)
}

export default UserProfile