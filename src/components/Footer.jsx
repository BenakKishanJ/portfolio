import React from 'react'

export default function Footer() {
  return (
    <div className='bg-black px-5 lg:px-28 py-3 lg:py-6 flex items-center justify-between mt-16'>
      {/* <img className='invert h-5 lg:h-9' src="/assets/logo.svg" alt="" /> */}

      <div className="contianer flex justify-start">
        <img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => scrollToSection("home")}
          className="h-9 cursor-pointer"
          src="/assets/favicon.png"
          alt="BKJ"
        />
        <img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => scrollToSection("home")}
          className="h-10 cursor-pointer ml-10"
          src="/assets/sign-dark.png"
          alt="Benak Kishan J"
        />
      </div>
      <div className='text-white lg:font-semibold lg:text-sm font-normal text-[10px] text-right lg:space-y-3'>
        <p>@ 2026 Personal Portfolio</p>
        <p>Made by -BKJ</p>
      </div>
    </div>
  )
}
