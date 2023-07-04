import React from 'react'
import "./loader.css"

const Loader = () => {
  return (
    <section className='absolute bg-sky-500 dark:bg-slate-900 flex flex-col items-center justify-center min-h-screen min-w-full z-10'>

      <div className='loader__container'>
        <div className='p-2'>
          <img className='cloud_loader m-auto h-16 md:h-20' src="/icons/images/cloud.png" alt="cloud Loader" />
        </div>

        <div className='flex justify-center p-2'>

          <h1 className=' text-white sm:text-xl md:text-[2rem] transition-all duration-500 ease-in-out'>Weather pp</h1>
          <img src="/icons/images/Ripple.svg" alt="loader" className='h-5 md:h-10 w-fit'/>

        </div>
      </div>
    </section>
  )
}

export default Loader
