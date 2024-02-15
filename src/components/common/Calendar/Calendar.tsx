import React from 'react'
import getPersianDate from '../../../core/utils/persianDate';
import { getHijriDayOfMonth } from '../../../core/utils/hijriMonths';
import { getEnglishDate } from '../../../core/utils/englishMonths';


const Calendar = () => {
  const strDate = getPersianDate();
  const hijriDayOfMonth = getHijriDayOfMonth();
  const englishDate = getEnglishDate();
  return (
    <ul>
      <li className='flex justify-between'>
       <div>{strDate}</div>
       <div> ۱۴۰۲/۱۱/۱۰</div>
      </li>

      <li className='flex justify-between'>
       <div> {hijriDayOfMonth}</div>       
       <div> ۱۴۰۲/۱۱/۱۰</div>
      </li>

      <li className='flex justify-between'>
        <div>

        {englishDate}
        </div>
        <div> ۱۴۰۲/۱۱/۱۰</div>
      </li>
    </ul>
  )
}

export default Calendar