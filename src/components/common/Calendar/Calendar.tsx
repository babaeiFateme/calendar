import React from 'react'
import  getPersianDayName  from '../../../core/utils/persianDayName';

const Calendar = () => {
  const dayName = getPersianDayName();
  return (
    <ul>
      <li className='flex justify-between'>
       <div>تطتایبل ۱۰ بتسیباست ۲۳۱۳</div>
       <div> ۱۴۰۲/۱۱/۱۰</div>
      </li>
    </ul>
  )
}

export default Calendar