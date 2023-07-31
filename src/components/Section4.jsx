import React from 'react'

export default function Section4() {
  return (
    <div className='my-10 bg-bg'>
        <div className='bg-white' >
            <h1 className='text-center text-[33px]'>How it works</h1>

            {/* Card1 */}

            <div className='bg-card my-10 mx-6  md:flex rounded-lg '>
                <img alt='/' className='md:p-10 md:w-1/3' src='https://assets-global.website-files.com/5e4482baa13a1926b23e2187/61fb155d422b521236149f54_Hero%20img-p-500.png' />
                <div className='p-4'>
                    <h2 className='text-[24px] font-semibold p-2'>First, use the free app to quickly and easily find discounted food from wherever you are.</h2>
                    <ul className='p-10 space-y-4 text-left list-disc'>
                        <li>Browse deals of up to 50% off at a grocery store location near you.</li>
                        <li>Choose your discounted food items.</li>
                        <li>Pay right in the app using any major credit card, VISA debit card, or SNAP EBT card.</li>
                    </ul>
                </div>
            </div>

            {/* Card2 */}

            <div className='bg-card my-10 mx-6 rounded-lg md:flex'>
                <img alt='/'className='mx-auto' src='https://assets-global.website-files.com/5e4482baa13a1926b23e2187/5e509efa670c445fe96f8065_illo.png' />
                <div className='p-4'>
                    <h2 className='text-[24px] font-semibold p-2'>Then, pick up your Flashfood order at the grocery store.</h2>
                    <p className='p-10  text-left '>Head to the store, grab your food items from the Flashfood zone, and quickly confirm your order with the customer service desk.</p>
                </div>
            </div>
                {/* card 3 */}

            <div className='bg-card my-10 mx-6 md:items-center md:flex-row-reverse md:flex rounded-lg'>
                <img alt='/'className='mx-auto md:p-10 md:w-1/3 ' src='https://assets-global.website-files.com/5e4482baa13a1926b23e2187/5e50882a8c34f83e2341e710_image.png' />
                <div className='p-4'>
                    <h2 className='text-[24px] font-semibold p-2'>Finally, enjoy good food, a great deal, and the good deed - you just saved some food from the landfill!</h2>
                    <p className='p-10  text-left '>Learn more about Food Waste.</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}
