import { David_Libre } from 'next/font/google'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
      <div>
        <Spotlight />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.3] absolute top-0 left-0 flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div>
        <div className='flex justify-center relative my-20 z-10'>
          <div className='max-w-[89w] md:max-w-2xl lg:max-w-[60wv] flex flex-col items-center justify-center'>
            <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
              Dynamic Web Magic with Next.js
            </h2>


            <TextGenerateEffect className='text-center text-[40px] md:text-5xl lg:text-6xl' words='Sample description here with next.js' />

            <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
              Hi- I&apos;m Jacky, a ML Engineer from the greater NY area.
            </p>

            <a href="#about">
              <MagicButton
                title='Show my Work'
                icon={<FaLocationArrow />}
                position='right'
                />
            </a>
          </div>
        </div>

      </div>
    </div>


  )
}

export default Hero