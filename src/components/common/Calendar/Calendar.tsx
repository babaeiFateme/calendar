import React, { useState } from 'react';
import { getHijriDayOfMonth } from '../../../core/utils/hijriMonths';

import Button from '../Button/Button';
import { formatDate, getEnglishDate } from '../../../core/utils/englishMonths';
import { formatPersianDate, getPersianDate } from '../../../core/utils/persianDate';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const updateDates = (dateModifier: number) => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + dateModifier);
    setCurrentDate(newDate);
  };

  const nextDateHandler = () => {
    updateDates(1);
  };

  const prevDateHandler = () => {
    updateDates(-1);
  };


  const strDate = getPersianDate(currentDate);
  const hijriDayOfMonth = getHijriDayOfMonth(currentDate);
  const englishDate = getEnglishDate(currentDate);
  const englishDateNumber = formatDate(currentDate)
  const persianDateNumber = formatPersianDate(currentDate)




  return (
    <ul>
      <li className='flex justify-between py-[25px] text-white'>
        <div>{strDate}</div>
        <div>
          <span className='text-green-500 pr-2'>{persianDateNumber.month}</span> /
          <span className='text-green-500 pr-2'>{persianDateNumber.day}</span> /
          <span className='text-green-500 pr-2'>{persianDateNumber.yaer}</span>
        </div>
      </li>

      <li className=''>
        <div className='py-[25px] flex justify-between '>
          <div>{hijriDayOfMonth}</div>
          <div>
            <span className='text-green-500 pr-2'>{persianDateNumber.month}</span> /
            <span className='text-green-500 pr-2'>{persianDateNumber.day}</span> /
            <span className='text-green-500 pr-2'>{persianDateNumber.yaer}</span>
          </div>
        </div>
      </li>

      <li className='flex justify-between py-[25px] '>
        <div>{englishDate}</div>
        <div> {englishDateNumber}</div>
      </li>
      <li className='flex w-full gap-2 flex-wrap justify-between items-center'>
        <Button onClick={prevDateHandler}>
          روز قبل
        </Button>
        <Button onClick={nextDateHandler}>
          روز بعد
        </Button>
      </li>
    </ul>
  );
};

export default Calendar;
