import React, { useState } from 'react'

export default function Section2() {
  const [value,setvalue]=useState(false)
  const[btn,setbtn]=useState("see more")
  function handleclick(){
    setvalue(!value)
    if(value){
      setbtn("see more")
    }
    else{
      setbtn("see less")
    }
  }
  return (
    <div className=' md:p-10'>
        <div className='grid grid-cols-2 md:grid-cols-4  items-center'>
          <img alt='/' src='https://assets-global.website-files.com/5e596dafce8eb6216f68e410/61e8848d60775e0d6e9055bb_Mt.PlymouthIGA.png'></img>
          <img alt='/' src='https://assets-global.website-files.com/5e596dafce8eb6216f68e410/61f9aa9bafd4220683c28567_VGs_logo7.png'></img>
          <img alt='/' src='https://assets-global.website-files.com/5e596dafce8eb6216f68e410/63bf4c4275cba538a4c79f46_RensPets.png'></img>
          <img alt='/' src='https://assets-global.website-files.com/5e596dafce8eb6216f68e410/64a5c41bf724bb41dfb7e64d_Kroger%3DColour%20Logo-p-500.png'></img>
          <img alt='/' src='https://assets-global.website-files.com/5e596dafce8eb6216f68e410/636588f25303aab26dba6499_savealot%20(2).png'></img>
          <img alt='/' src='https://assets-global.website-files.com/5e596dafce8eb6216f68e410/6160913fbdb50d1257ade855_stop-and-shop.png'></img>
          <img alt='/' src='https://assets-global.website-files.com/5e596dafce8eb6216f68e410/6160914b792d8c1e70357323_sn-martins.png'></img>
          <img alt='/' src='https://assets-global.website-files.com/5e596dafce8eb6216f68e410/6160914fbdb50d4274adf3a7_tops.png'></img>
          <img alt='/' src='https://assets-global.website-files.com/5e596dafce8eb6216f68e410/6160915a6317724e22976a7b_hyvee.png'></img>
          <img alt='/' src='https://assets-global.website-files.com/5e596dafce8eb6216f68e410/6160916c42acebf7a2165b1a_dominion.png'></img>
          </div>
          {value && <div className='grid md:grid-cols-4 items-center  grid-cols-2'>
          <img alt='/' src='https://assets-global.website-files.com/5e596dafce8eb6216f68e410/6160916cdd14348403a7c591_zehrs.png'></img>
          <img alt='/' src='https://assets-global.website-files.com/5e596dafce8eb6216f68e410/6160917b1a8635a54d0474b5_meijer.png'></img>
          <img alt='/' src='https://assets-global.website-files.com/5e596dafce8eb6216f68e410/61609143a31417a81a957ae4_giant-martins.png'></img>
          <img alt='/' src='https://assets-global.website-files.com/5e596dafce8eb6216f68e410/61609161bc65c04d70b91fb5_familyfare.png'></img>
          <img alt='/' src='https://assets-global.website-files.com/5e596dafce8eb6216f68e410/61609161bdb50d4592ae0143_provigo.png'></img>
          <img alt='/' src='https://assets-global.website-files.com/5e596dafce8eb6216f68e410/616091491da266b91553e11d_giant-eagle.png'></img>
          <img alt='/' src='https://assets-global.website-files.com/5e596dafce8eb6216f68e410/616091788c2abd72362736a9_superstore.png'></img>
          <img alt='/' src='https://assets-global.website-files.com/5e596dafce8eb6216f68e410/616091839ed0e5299124e203_loblaws.png'></img>
          <img alt='/' src='https://assets-global.website-files.com/5e596dafce8eb6216f68e410/6160915588d55b4f0856ffcd_giant.png'></img>
          <img alt='/' src='https://assets-global.website-files.com/5e596dafce8eb6216f68e410/6160917733eb280455acb2cd_nofrills.png'></img>
          </div> }
        <button onClick={handleclick} className='p-2 md:my-10 border-slate-200 border-solid border-2 rounded-full'>{btn}</button>
    </div>
  )
}
