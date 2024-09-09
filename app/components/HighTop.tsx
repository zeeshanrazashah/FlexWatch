"use client"
import React, { useState, useEffect } from "react";
import { SiPolestar } from "react-icons/si";

function HighTop() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      title: 'The Red Wolf',
      description: 'Red Wolf is a movie about a village where everyone is waiting for their Bright Lord to give them freedom from the Dark Lord.',
      detail:'7h 30min',
      type:'Season',      
      img: '/wolf.jpg',
    },
    {
      title: 'Kal Ki Avtar',
      description: 'The Blue Sky is a documentary about the vast and unexplored sky.',
      img: '/kal.jpg',
      detail:'2h 48min',
      type:'Movie',
    },
    {
      title: 'Space Forest',
      description: 'The Green Forest explores the beauty and secrets of the forest.',
      img: '/alier.jpg',
      detail:'1h 48min',
      type:'Movie',
    },
    {
        title: 'Garelt Hunter',
        description: 'The Green Forest explores the beauty and secrets of the forest.',
        img: '/tw.png',
        detail:'1h 48min',
        type:'Season',
      },
      {
        title: 'The Kindom of the Apps',
        description: 'The Green Forest explores the beauty and secrets of the forest.',
        img: '/app.jpg',
        detail:'1h 48min',
        type:'Movie',
      },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className='m-2'>
      <h1 className='text-3xl font-semibold my-3'>Highlighted Content</h1>
      <div className='relative md:w-[750px] h-[430px] w-auto p-2 rounded-2xl hover:cursor-pointer duration-500 ease-in-out bg-black shadow-lg shadow-cyan-200 ring-2 ring-cyan-400 border-4 border-black group'>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={slide.img} alt={slide.title} className='w-full h-full object-cover rounded-xl' />
            <div className='absolute left-0 bottom-0 md:w-[620px] sm:w-auto bg-black/5 p-4 rounded-2xl'>
              <h1 className='text-3xl font-semibold text-white ml-5'>{slide.title}</h1>
              <div className="flex font-mono">
                <h2 className="text-white ml-6 font-bold">{slide.detail}</h2>
                ... 
                <p className="text-cyan-100 text-sm -rotate-12 bg-cyan-900/50 rounded-md scale-95 p-2  uppercase">{slide.type}</p>
                </div>
              <p className='text-cyan-50  bg-white/5 m-5  p-4 flex justify-center text-sm'>{slide.description}</p>
            </div>
            <SiPolestar className='absolute top-3 left-3 text-cyan-700 shadow-xl shadow-cyan-400 rounded-full animate-spin size-8 m-5 bg-black/30' />
          </div>
        ))}
        <button
          onClick={prevSlide}
          className='absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
          ‹
        </button>
        <button
          onClick={nextSlide}
          className='absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'
        >
          ›
        </button>
      </div>
    </main>
  );
}

export default HighTop;
