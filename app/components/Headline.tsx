import React from 'react'
import { PiFireDuotone } from "react-icons/pi";
import { FaRankingStar } from "react-icons/fa6";

function Headline() {
  return (<>
  <main className='mx-6'>
<h1 className='text-3xl font-bold my-4'>Get The Most Ranked Show Free for 3 Month</h1>
  <button className='bg-gradient-to-r from-cyan-300 to-cyan-700 flex justify-center p-3 w-52 rounded-lg hover:scale-110 duration-500 ease-in-out'>
<aside className=' bg-white rounded-3xl flex justify-center animate-pulse'>
    <PiFireDuotone className='size-8  text-Cyan-600'/>
</aside>
    <h1 className='text-black ml-4 text-2xl font-semibold'>Create</h1>
  </button>
  </main>
  </>)
}

export default Headline