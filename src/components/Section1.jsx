import React from 'react'

export default function Section1() {
  return (
    <div>
      <div className='relative   '>
      <img className='sm:h-screen w-screen md:hidden ' src="https://assets-global.website-files.com/5e4482baa13a1926b23e2187/622689da4ca72484c8fcf0ed_home%20-%20hero%20mobile%20(new).png" alt="/"></img>
      <img className=' object-fill invisible w-0 md:visible md:w-screen md:object-right ' src='https://assets-global.website-files.com/5e4482baa13a1926b23e2187/6227e532329aa42351839eb0_Home%20-%20hero%20qr%20code.png' alt='/'/>
      <div id='yeh' className='absolute top-20   md:w-2/3 md:inset-y-0 md:mt-16  flex justify-start items-start flex-col md:px-10 space-y-2 p-4 text-left md:py-[40px] lg:py-[50px]'>
        <h1 className='text-[33px] md:text-[40px] lg:text-[60px] text-white  font-bold'>Save money and fight against food waste</h1>
        <p className='text-[15px] text-white md:pr-20'>Get massive savings on fresh food items like meat and produce that are nearing their best before date at grocery stores across Canada and the U.S. </p>
        <div className='flex space-x-3'>
                   <img src='https://assets-global.website-files.com/5e4482baa13a1926b23e2187/5e4dd1e309d48fb5d5f2be24_Apple%201.svg' alt='/' />
                  <img src='https://assets-global.website-files.com/5e4482baa13a1926b23e2187/5e4dd1dd09d48f7b3cf2bdf4_Google%201.svg' alt="/" />
                </div>
                <p className='text-white text-[15px]'>How it works</p>
      </div>
      </div>
      


        
    </div>
  )
}
