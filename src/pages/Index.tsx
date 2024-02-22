import React from 'react'
import Time from '../components/Time/Time'
import Calendar from '../components/Calendar/Calendar'

const Landing = () => {
  return (
    <div className='px-[64]'>
      <Time />
      <Calendar />
    </div>
  )
}

export default Landing