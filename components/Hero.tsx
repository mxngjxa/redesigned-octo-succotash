import { David_Libre } from 'next/font/google'
import React from 'react'
import { Spotlight } from './ui/Spotlight'

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
      <div>
        <Spotlight />
      </div>
    </div>
  )
}

export default Hero