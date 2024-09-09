import React from 'react'
import { GiCardPlay } from "react-icons/gi";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { PiGooglePodcastsLogoLight } from "react-icons/pi";
import { PiGooglePodcastsLogoDuotone } from "react-icons/pi";
import { SiCrowdsource } from "react-icons/si";


function Login() {
  return (<>
  <main className='flex justify-center'>

  <div className='mx-6 grid place-content-center bg-white/10 mt-10 p-5 rounded-xl w-96 shadow-2xl shadow-cyan-500'>
  <div className='flex'>
    
  <div className='bg-zinc-400 w-14 rounded-3xl shadow-xl shadow-white m-4 -rotate-45'>
  <div className='bg-zinc-700 w-7 rounded-full shadow-xl shadow-cyan-100 animate-bounce'>
  <PiGooglePodcastsLogoDuotone className='bg-transparent size-10 animate-spin'/></div></div>
<p className='mt-10 text-2xl font-mono animate-pulse'>Trump Card</p>
  </div>
<h1 className='text-4xl font-bold my-4 text-cyan-400 ml-9'>Sigin or Login to Get Trump Card</h1>
<div className='gap-5 grid m-5 place-content-center '>

<input type="text" placeholder='Email' className='rounded-lg p-2 text-black border-2 border-cyan-200'/>
<input type="text" placeholder='Password' className='rounded-lg p-2 text-black border-2 border-cyan-200'/>
</div>

<div className='grid place-content-center gap-5'>

  <button className='bg-gradient-to-r from-cyan-300 to-cyan-700 flex justify-center p-3 w-40 rounded-lg hover:scale-110 hover:ml-11 duration-500 ease-in-out'>
<aside className='flex justify-center animate-pulse'>
    <SiCrowdsource className='size-8  text-Cyan-600'/>
</aside>
    <h1 className='text-black ml-4 text-2xl font-semibold'>Get in</h1>
  </button>
<div className='flex'>

  <button className='bg-gradient-to-r from-gray-300 to-gray-700 flex justify-center  p-3 w-16 rounded-lg hover:scale-110 hover:mt-7 duration-500 ease-in-out'>
<aside className='flex justify-center animate-pulse'>
    <FcGoogle className='size-8'/>
</aside>
    
  </button>

  <button className='bg-gradient-to-r from-gray-300 to-gray-700 flex justify-center p-3 w-16 rounded-lg hover:scale-110 hover:mt-7 duration-500 ease-in-out'>
<aside className='flex justify-center animate-pulse'>
    <FaFacebook className='size-8 text-blue-800'/>
</aside>

  </button>
</div>
</div>

  </div>
  </main>
  
  </>)
}

export default Login