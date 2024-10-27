import React from 'react'

const Footer = () => {
  return (
    <div className="  ">
      <div className=' w-full h-[177px]  py-[24px] lg:px-[312px] gap-[10px] bg-[#101423]'>
        <div className='w-full h-full gap-[4px]  '>
          <div className='lg:w-[330px] lg:h-[76px] mx-auto my-auto grid gap-2'>
            <div className='flex justify-center'>
            <p className="mb-2 text-[16px] font-bold">
              <span className='text-white'> Apply </span>
              <span className="bg-custom-linear bg-clip-text text-transparent">
                Copin Affiliate Program
              </span>
              <span className='text-white'> to get </span>
            </p>
            </div>

         
            <div className="flex justify-center">
              <span className='text-white text-[16px] font-bold'>more benefits!</span>
            </div>

            <div className="flex justify-center">
              <p className='text-[#4EAEFD]'>Contact us</p>
            </div>
          </div>

        </div>
      </div>

    </div>

  )
}

export default Footer
