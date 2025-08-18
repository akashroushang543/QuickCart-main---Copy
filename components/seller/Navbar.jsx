import React from 'react'
import { assets } from '../../assets/assets'
import Image from 'next/image'
import { useAppContext } from '@/context/AppContext'

const Navbar = () => {

  const { router } = useAppContext()

  return (
    <div className='flex items-center px-4 md:px-8 py-3 justify-between border-b'>
      <Image onClick={()=>router.push('/')} className='w-28 lg:w-32 cursor-pointer' src={assets.logo} alt="" />
      <button className='bg-gradient-to-r from-neon-purple to-pink-500 text-bg-primary px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm hover:from-pink-500 hover:to-neon-purple transition-all duration-300 hover:shadow-[0_0_20px_rgba(123,44,191,0.5)] font-medium tracking-wide'>Logout</button>
    </div>
  )
}

export default Navbar