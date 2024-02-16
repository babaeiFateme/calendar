import React, { useState } from 'react';

import Button from '../common/Button/Button';
import { formatDate } from '../../core/utils/englishMonths';
import { formatPersianDate } from '../../core/utils/persianDate';
import ArrowLeft from '../common/icons/ArrowLeft';
import ArrowRight from '../common/icons/ArrowRight';
import { getCovertDate } from '../../core/utils/getConvertDate';

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

  const persianDate = getCovertDate(currentDate, 'fa-IR');
  const englishDate = getCovertDate(currentDate, 'en-us');
  const hijriDate = getCovertDate(currentDate, 'ar-u-ca-islamic');

  const englishDateNumber = formatDate(currentDate)
  const persianDateNumber = formatPersianDate(currentDate)

  return (
    <ul className='list-date'>
      <li className='item-box py-6 px-7 flex justify-between text-white mb-[34px]'>
        <div>{persianDate}</div>
        <div>
          <span className='text-green-500 p-2'>{persianDateNumber.day}</span> /
          <span className='text-green-500 p-2'>{persianDateNumber.month}</span> /
          <span className='text-green-500 p-2'>{persianDateNumber.year}</span>
        </div>
      </li>

      <li className='item-box py-6 px-7 flex justify-between text-white mb-[34px]'>

        <div>{hijriDate}</div>
        <div>
          <span className='text-green-500 p-2'>{persianDateNumber.day}</span> /
          <span className='text-green-500 p-2'>{persianDateNumber.month}</span> /
          <span className='text-green-500 p-2'>{persianDateNumber.year}</span>
        </div>
      </li>

      <li className='item-box py-6 px-7 flex justify-between text-white mb-[34px]'>
        <div>{englishDate}</div>
        <div>
          <span className='text-green-500 p-2'> {englishDateNumber.month}</span> -
          <span className='text-green-500 p-2'> {englishDateNumber.day}</span> -
          <span className='text-green-500 p-2'> {englishDateNumber.year}</span>
        </div>
      </li>
      <li className='item-box py-6 px-7 flex justify-between text-white mb-[34px]'>
        <Button className='flex gap-2 items-center' onClick={prevDateHandler}>
          <ArrowRight />
          <span className='text-green-500'>
            روز قبل
          </span>
        </Button>
        <Button className='flex gap-2 items-center' onClick={nextDateHandler}>
          <span className='text-green-500'>
            روز بعد
          </span>
          <ArrowLeft />
        </Button>
      </li>
    </ul>
  );
};

export default Calendar;
