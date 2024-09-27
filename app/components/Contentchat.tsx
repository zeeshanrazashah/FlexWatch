import React from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import { AiFillLike } from "react-icons/ai";
import { AiTwotoneDislike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { RiDeleteBin4Fill } from "react-icons/ri";


function Contentchat() {
  return (
    <>
      <footer className="">
        <main className="flex bg-white/15 m-5 rounded-lg items-center">
          <aside className="mr-10 grid place-content-center items-center bg-cyan-900/20 p-2">
            <div className="overflow-hidden size-16 rounded-full flex justify-end">
              <img src="/wolf.jpg"/>
            </div>
            <p className="font-mono flex justify-center m-2">
              Wolf</p>
          </aside>
          <div className="flex">
            <input className="bg-white/25 m-5 font-bold rounded-full p-2 w-[500px] text-cyan-200 flex justify-center h-10"
              type="text"
              placeholder="Comment"
            />
            <button className="">
              <CiLocationArrow1 className="size-10 rotate-45 hover:rotate-90 bg-cyan-500/30 hover:bg-white/40 rounded-md duration-300 ease-in-out" />
            </button>
          </div>
        </main>
        <h1 className="flex justify-center font-semibold text-cyan-200/20 text-xl">
          Join Comment Chat
        </h1>
        <main className="bg-black p-2">
          <article className="flex m-4 rounded-lg items-center">
            <div className="flex">
              <div className="flex">
                <div>
                  <p className="font-mono flex justify-end m-2 bg-black">
                    Garelt</p>
                  <p className="bg-white/15 m-2 font-sans rounded-lg p-2 w-[600px] text-sm text-gray-200 flex justify-end">
                   CSS Framwork TailwindCss
                  </p>
 <div className="flex justify-end">
<button className="font-sans hover:text-cyan-300 hover:bg-white/20 p-2 rounded-lg duration-300 ease-in-out">
Reply</button>
                  <button className='p-1'> 
  <AiFillDislike className='size-4 hover:text-cyan-200 hover:bg-white/40 rounded-full  duration-300 ease-in-out'/>
  </button>

  <button className=' p-1'> 
  <AiFillLike className='size-4 hover:text-cyan-200 hover:bg-white/40 rounded-full  duration-300 ease-in-out'/>
  </button></div>               
                </div>
              </div>
              <div className="overflow-hidden size-16 rounded-full flex justify-end">
                <img src="/wt.jpg" className=" " />
              </div>
            </div>
          </article>

          <article className="flex m-4 rounded-lg items-center">
  <div className="flex">
    <div className="flex">
    <div className="overflow-hidden size-16 rounded-full flex justify-start bg-cover">
      <img src="/wolf.jpg" className=" " />
    </div>

      <div>

        <p className="font-mono flex justify-start m-2">
          Wolf
        </p>
        <p className="bg-cyan-300/15 m-2 font-sans rounded-lg p-2 w-[600px] text-sm text-gray-200 flex justify-start text-justify">
React Framwork Next.js
        </p>
        <div className="flex justify-start">
          <button className='p-1'> 
            <AiFillDislike className='size-4 hover:text-cyan-200 hover:bg-white/40 rounded-full duration-300 ease-in-out'/>
          </button>
          <button className='p-1'> 
            <AiFillLike className='size-4 hover:text-cyan-200 hover:bg-white/40 rounded-full duration-300 ease-in-out'/>
          </button>
<div className="flex justify-end w-full">
<button className='p-1'> 
            <RiDeleteBin4Fill className='size-4 hover:text-red-400 hover:bg-white/40 rounded-full duration-300 ease-in-out'/>
          </button>
  
</div>
        </div>
      </div>
    </div>
  </div>
</article>
        </main>
      </footer>
    </>
  );
}

export default Contentchat;
