import React from 'react'
import { Link } from 'react-router-dom'

const Intro = () => {
  return (
    <div className='bgContainer w-full min-h-screen flex-center'>
      <div className="px-6 py-8 flex flex-col items-center">
        <h2 className='text-primary font-bold text-4xl mb-2'>Quizzical</h2>
        <p className='text-primary mb-8'>Test yourself on pretty much anything</p>
        <Link to="/questions" className='bg-btnPrimary text-btnText text-center rounded-2xl px-7 py-3.5 w-full'>Start quiz</Link>
      </div>
    </div>
  )
}

export default Intro