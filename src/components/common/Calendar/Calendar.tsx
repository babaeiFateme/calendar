import React from 'react'
import getPersianDate from '../../../core/utils/persianDate';


const Calendar = () => {
  const strDate = getPersianDate();
  return (
    <ul>
      <li className='flex justify-between'>
       <div>{strDate}</div>
       <div> ۱۴۰۲/۱۱/۱۰</div>
      </li>
    </ul>
  )
}

export default Calendar