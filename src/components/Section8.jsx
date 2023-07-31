import React from 'react'

export default function Section8() {
  return (
    <div>
        <div className='bg-fcol pt-[70px] md:-translate-y-[83px] lg:-translate-y-24 md:p-8 lg:h-screen'>
            <div className='grid grid-cols-2 md:grid-cols-5 space-y-[1px] space-x-[1px] md:gap-4 px-[15px] md:px-10 md:py-6'>
                <img alt='/' src='https://assets-global.website-files.com/5e4482baa13a1926b23e2187/6079b4cc2af973049f73bfe1_%40detroitfather.jpg' />
                <img alt='/' src='https://assets-global.website-files.com/5e4482baa13a1926b23e2187/6079b4bf46b89d3095d43c44_%40buffalofooood.jpg' />
                <img alt='/' src='https://assets-global.website-files.com/5e4482baa13a1926b23e2187/6079b4dd83b02737a2ce6ea9_%40shoshana.jpg' />
                <img alt='/' src='https://assets-global.website-files.com/5e4482baa13a1926b23e2187/6079b4e8f8596474f6a68911_%40thefunemployedfamily.jpg' />
                <img alt='/' className='z-10' src='https://assets-global.website-files.com/5e4482baa13a1926b23e2187/6079b50f16c3352a86643dba_%40undeniableannie.jpg' />
            </div>
            <div className='md:flex'>
                    <div className='pr-4 relative '>
                        <img className='-translate-y-16 md:translate-y-12' alt='/' src='https://assets-global.website-files.com/5e4482baa13a1926b23e2187/6079e923d03463f1d7c7a1c8_footer-blob.svg' />
                        <div className=' absolute top-0 md:top-16 w-2/3  text-left py-6 px-4'>
                            <img alt='/' src='https://assets-global.website-files.com/5e4482baa13a1926b23e2187/6079a3e353127e9a9a60b0e2_flashfood-app-icon.svg' />
                            <p className='text-white text-[26px] '>Find Flashfood near you →</p>
                            <div className='flex gap-4 justify-center items-center md:justify-start pt-4'>
                                <img alt='/' src='https://assets-global.website-files.com/5e4482baa13a1926b23e2187/6079eac5223122b8ffa160df_insta-mint.svg'/>
                                <img alt='/' src='https://assets-global.website-files.com/5e4482baa13a1926b23e2187/6079eac56256cf0580a0319d_fb-mint.svg'/>
                                <img alt='/' src='https://assets-global.website-files.com/5e4482baa13a1926b23e2187/6079eac5d03463ecbdc7a983_twitter-mint.svg'/>
                            </div>
                        </div>
                    </div>
                    <div className='bg-fcol p-4 md:-translate-y-0'>
                            <div className='bg-fcol grid grid-cols-2 gap-8 md:flex text-[14px] p-4'>
                                <div className='inline space-y-4 text-left  text-white' >
                                    <div>THE TEAM</div>
                                    <div>NEWS</div>
                                    <div>LOCATIONS</div>
                                    <div>BLOG</div>
                                </div>  
                                <div  className='inline space-y-4 text-left text-white ' >
                                    <div>OUR STORY</div>
                                    <div>REFER A FRIEND</div>
                                    <div>FOOD WASTE</div>
                                </div>
                                <div  className='inline space-y-4 text-left text-white' >
                                    <div>PARTNERS</div>
                                    <div>CAREERS</div>
                                    <div>SUPPORT </div>
                                    <div>CONTACT US</div>
                                </div>
                                <div  className='inline space-y-4 text-left text-white'> 
                                    <div>TERMS OF USE</div>
                                    <div>PRIVATE POLICY</div>
                                    <div>SUPPLIER DIVRSITY POLICY</div>
                                    <div>RESPONSIBLE DISCLOSURE</div>
                                </div>       
                            </div>
                            <div className=' text-white text-left m-10'>
                                © Flashfood Inc. 2023. All rights reserved.
                            </div>
                     </div>
            </div>
        </div>
    </div>
  )
}
