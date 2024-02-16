import React, { useState } from 'react';
import { getHijriDayOfMonth } from '../../../core/utils/hijriMonths';

import Button from '../Button/Button';
import getPersianDate from '../../../core/utils/persianDate';
import { getEnglishDate } from '../../../core/utils/englishMonths';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const updateDates = (dateModifier:number) => {
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

  return (
    <ul>
      <li className='flex justify-between'>
        <div>{strDate}</div>
        <div> ۱۴۰۲/۱۱/۱۰</div>
      </li>

      <li className='flex justify-between'>
        <div>{hijriDayOfMonth}</div>
        <div> ۱۴۰۲/۱۱/۱۰</div>
      </li>

      <li className='flex justify-between'>
        <div>{englishDate}</div>
        <div> ۱۴۰۲/۱۱/۱۰</div>
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
