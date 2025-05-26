import React from 'react'

const Contact = () => {
  return (
    <div className='max-w-[90%] lg:max-w-3xl mx-auto mt-10 font-jost'>
      <form action="" className='w-full shadow'>
        <h1 className='text-3xl font-bold text-center'>Contact Us</h1>
        <div>
          <label >Name <span className='text-red-500'>*</span></label> <br />
          <input type="text" className='w-full p-2 border boder-gray-200 mt-2' placeholder='Input Your Name' />
          <label className='mt-5' >Phone <span className='text-red-500'>*</span></label> <br />
          <input type="text" className='w-full p-2 border boder-gray-200 mt-2' placeholder='Input Your Phone Number' />
          <label >Message <span className='text-red-500'>*</span></label> <br />
          <input type="text" className='w-full p-2 border boder-gray-200 mt-2' placeholder='Input Your Message' />
        </div>
        <div className='mt-80 flex justify-end'>
          <button className='py-2 px-6 bg-primary rounded-lg text-white
          hover:bg-white hover:text-primary transition-all duration-300'>Submite</button>
        </div>
      </form>


    </div>
  )
}

export default Contact