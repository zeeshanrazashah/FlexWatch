import React from 'react'
import { SiHomebridge } from "react-icons/si";
import { CiSearch } from "react-icons/ci";
import { TbHomeFilled } from "react-icons/tb";
import { RiSettingsFill } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import { FaHistory } from "react-icons/fa";
import Link from 'next/link';


function SideNav() {
  return (
    <main className='grid place-content-start ml-3 mt-40'>
      
<nav className='grid place-content-center gap-4 bg-white/10 rounded-xl w-12  items-center p-5'>
   
<div className='flex'>
    <button>
<TbHomeFilled className='size-6 hover:text-cyan-200 duration-300 ease-in hover:shadow-Cyan-200 shadow-2xl'/>
    </button>
    </div>   

    <button>
<FaRegUser className='size-6 hover:text-cyan-200 duration-300 ease-in hover:shadow-Cyan-200 shadow-2xl'/>
    </button>

    <button>
<RiSettingsFill className='size-6 hover:text-cyan-200 duration-300 ease-in hover:shadow-Cyan-200 shadow-2xl'/>
    </button>
   
    <button>
<FaHistory className='size-6 hover:text-cyan-200 duration-300 ease-in hover:shadow-Cyan-200 shadow-2xl'/>
    </button>

    <button>
<CiSearch className='hover:animate-pulse  text-cyan-100 size-6 hover:text-cyan-400 duration-300 ease-in hover:shadow-Cyan-200 shadow-2xl'/>
    </button>
  <Link href='/login'>
<button className='mt-96'>
<HiOutlineLogout className='size-6 hover:text-cyan-200 duration-300 ease-in hover:shadow-Cyan-200 shadow-2xl'/>
    </button>
  </Link>  

</nav>

    </main>
  )
}

export default SideNav