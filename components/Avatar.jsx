import Image from 'next/image'
import React from 'react'
import myImage from '@/assets/avatar.svg'

const Avatar = () => {
  return (
    <div className="h-[100svh] w-[100svw] relative overflow-hidden bg-my-color-2 flex flex-col items-center justify-center">
      <div className="relative flex justify-center items-center w-[300px] h-[300px] bg-red-600 rounded-full">
        <Image
          src={myImage}
          width={500}
          height={500}
          alt="My Image"
          className="border-2 border-white max-w-full max-h-full rounded-full scale-[0.87] transition-transform duration-300 ease-[cubic-bezier(0.4,1.55,0.74,0.55)] hover:scale-[1.11]"
        />
      </div>
    </div>
  )
}

export default Avatar
