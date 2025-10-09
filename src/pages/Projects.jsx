import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

const Projects = () => {
  return (
    <div className='sm:max-w-[810px] max-w-[350px] mx-auto sm:mt-[70px] mt-[20px]'>
      <div>
        <h1 className='sm:text-[40px] text-[32px] leading-[52px] font-[700] mb-[5px] sm:mt-[30px] mt-[10px]'>Projects</h1>
        <h2 className='sm:text-[20px] text-[18px] leading-[26px] text-[#9ca3af] font-[400]'>These are my projects on which I try to work actively.</h2>
        <div className='sm:max-w-[800px] max-w-[350px] mx-auto mt-10'>
          
          {/* PayTM */}
          <div className="group relative w-full h-full mb-5 [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] opacity-90 overflow-hidden">
            <img src="/Paytm.png" className="w-full h-full transition-all duration-300 ease-out opacity-70 overflow-hidden [mask-image:linear-gradient(to_top,transparent_15%,#000_100%)] hover:opacity-100 group-hover:scale-105 object-cover" alt="PayTM" />
            <div className="absolute bottom-0 left-0 group-hover:-translate-y-6 z-10 flex flex-col gap-1 p-6 transition-all duration-300 custom">
              <h2 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300 m-0">PayTM</h2>
              {/* Tech stack */}
              <div className='flex gap-2 mt-1 flex-wrap'>{/* stack here */}</div>
              <p className='max-w-lg text-neutral-400 m-0'>Website where you can transfer your wallet amount to other account.</p>
              {/* Live link */}
             
                <a 
                  href="https://github.com/PrathamSingh1/Paytm-Wallet" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className='min-w-22 w-22 px-3 py-1 bg-zinc-200 text-black rounded-full flex items-center justify-between cursor-pointer'>
                  <span className='text-sm font-medium'>Github</span>
                  <IoIosReturnRight />
                </a>
              
              
            </div>
          </div>

          {/* Ubuntu OS Portfolio */}
          <div className="group relative w-full h-full mb-5 [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] opacity-100 overflow-hidden">
            <img src="/Ubuntu.png" className="w-full h-full transition-all duration-300 ease-out opacity-70 overflow-hidden [mask-image:linear-gradient(to_top,transparent_15%,#000_100%)] hover:opacity-100 group-hover:scale-105 object-cover" alt="Ubuntu OS Portfolio" />
            <div className="absolute bottom-0 left-0 group-hover:-translate-y-6 z-10 flex flex-col gap-1 p-6 transition-all duration-300 custom">
              <h2 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300 m-0">Ubuntu OS Portfolio</h2>
              {/* Tech stack */}
              <div className='flex gap-2 mt-1 flex-wrap'>{/* stack here */}</div>
              <p className='max-w-lg text-neutral-400 m-0'>A Web Based Operating System where you can browse chrome, terminal and many more.</p>
              {/* Live link */}
              <a 
                  href="https://ubuntu-simulation-pi.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className='min-w-22 w-22 px-3 py-1 bg-zinc-200 text-black rounded-full flex items-center justify-between cursor-pointer'>
                  <span className='text-sm font-medium'>Live</span>
                  <IoIosReturnRight />
                </a>
            </div>
          </div>

          {/* Refokus Website */}
          <div className="group relative w-full h-full mb-5 [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] opacity-100 overflow-hidden">
            <img src="/Refokus.png" className="w-full h-full transition-all duration-300 ease-out opacity-70 overflow-hidden [mask-image:linear-gradient(to_top,transparent_15%,#000_100%)] hover:opacity-100 group-hover:scale-105 object-cover" alt="Refokus Website" />
            <div className="absolute bottom-0 left-0 group-hover:-translate-y-6 z-10 flex flex-col gap-1 p-6 transition-all duration-300 custom">
              <h2 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300 m-0">Refokus Website Design</h2>
              {/* Tech stack */}
              <div className='flex gap-2 mt-1 flex-wrap'>{/* stack here */}</div>
              <p className='max-w-lg text-neutral-400 m-0'>Build A Cool Animated Website Of Refokus.</p>
              {/* Live link */}
              <a 
                  href="https://refokus-virid.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className='min-w-22 w-22 px-3 py-1 bg-zinc-200 text-black rounded-full flex items-center justify-between cursor-pointer'>
                  <span className='text-sm font-medium'>Live</span>
                  <IoIosReturnRight />
                </a>
            </div>
          </div>

          {/* Writium */}
          <div className="group relative w-full h-full mb-5 [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] opacity-100 overflow-hidden">
            <img src="/Writium.png" className="w-full h-full transition-all duration-300 ease-out opacity-70 overflow-hidden [mask-image:linear-gradient(to_top,transparent_15%,#000_100%)] hover:opacity-100 group-hover:scale-105 object-cover" alt="Writium" />
            <div className="absolute bottom-0 left-0 group-hover:-translate-y-6 z-10 flex flex-col gap-1 p-6 transition-all duration-300 custom">
              <h2 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300 m-0">Writium</h2>
              {/* Tech stack */}
              <div className='flex gap-2 mt-1 flex-wrap'>{/* stack here */}</div>
              <p className='max-w-lg text-neutral-400 m-0'>Website where you can share your thoughts with everyone.</p>
              {/* Live link */}
              <a 
                  href="https://writium.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className='min-w-22 w-22 px-3 py-1 bg-zinc-200 text-black rounded-full flex items-center justify-between cursor-pointer'>
                  <span className='text-sm font-medium'>Live</span>
                  <IoIosReturnRight />
                </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Projects
