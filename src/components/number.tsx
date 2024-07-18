import React from 'react'

type Props = {
  number: number
}

const NumberIcon = ({ number }: Props) => {
  return (
    <div className='bg-[#C6E9FF] w-[90px] h-[90px] rounded-full flex items-center justify-center'>
      <div className='bg-[#77CBFF] w-[70px] h-[70px] rounded-full flex items-center justify-center'>
        <div className='bg-[#43B7FF] w-[50px] h-[50px] rounded-full flex items-center justify-center'>
          <h1 className='text-white font-semibold text-3xl'>{number}</h1>
        </div>
      </div>
    </div>
  )
}

export default NumberIcon