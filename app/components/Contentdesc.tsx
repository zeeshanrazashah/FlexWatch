import React from "react";
import { IoIosArrowDown } from "react-icons/io";

function Contentdesc() {
  return (
    <article className="m-2">
      <div className="flex bg-white/25 rounded-2xl m-2">
        <div className="h-20 overflow-hidden bg-black/20 p-2">
          <img
            src="/dpw.jpg"
            alt=""
            className="h-16 w-20 rounded-xl border-4 border-cyan-200/50"
          />
        </div>
        <div className="m-2">
          <h1 className="text-lg text-cyan-200 font-medium">Roder</h1>
          <div className="flex gap-2">
            <h2 className="flex">
              20.6
              <p className="text-cyan-200">M</p>
            </h2>
            <h3>Cosigners</h3>
          </div>
          
       <div className="p-2 text-cyan-100 grid  rounded- bg-black/20 mt-5 duration-300 ease-in-out font-sans text-sm-">
      <h1>Description</h1> 
<div className="w-[600px]"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, veniam. Nobis minus dignissimos velit, accusantium provident assumenda maxime, vero tenetur dolore aspernatur cumque, illum quo nisi possimus corrupti! Ipsum, excepturi?</div>
<button className="flex rounded-full text-cyan-300 m-2 hover:text-cyan-100 duration-300 ease-in-out w-20"> more...<IoIosArrowDown className="size-6"/></button>
</div>
        </div>
      </div>
    </article>
  );
}

export default Contentdesc;
