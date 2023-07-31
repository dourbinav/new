import React from 'react'

export default function Navbar() {
  return (
    <div>
        <div className='bg-bg w-screen h-24 flex items-center justify-around px-2 md:px-10 space-x-6 fixed z-20'>
                <div className='min-w-min  w-1/3'>
                <img className='' src='https://assets-global.website-files.com/5e4482baa13a1926b23e2187/5e73b9a76a448d16c1d65d34_logo_white.svg' alt="/" />
                </div>
                <div className=' invisible w-0 md:visible md:flex md:justify-around md:grow list-none text-white text-[16px] '>
                  <li>How it works</li>
                  <li>locations</li>
                  <li>About </li>
                  <li>Support</li>
                  <li>partners</li>
                </div>
                <div className='flex items-center space-x-4'>
                    <button className='bg-dwbtn p-2 rounded-md md:shadow-[6px_6px]  shadow-shdow'>Download</button>
                    <div className='flex flex-col space-y-0.5 md:hidden'>
                    <span className='w-5 h-0.5 bg-white'></span>
                    <span className='w-5 h-0.5 bg-white'></span>
                    <span className='w-5 h-0.5 bg-white'></span>
                    </div>
                </div>
        </div>
        
    </div>
  )
}
