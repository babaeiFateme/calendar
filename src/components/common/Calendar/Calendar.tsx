import React from 'react';
import getPersianDate from '../../../core/utils/persianDate';
import { getHijriDayOfMonth } from '../../../core/utils/hijriMonths';
import { getEnglishDate } from '../../../core/utils/englishMonths';
import Button from '../Button/Button';

const Calendar = () => {



  
  const strDate = getPersianDate();
  const hijriDayOfMonth = getHijriDayOfMonth();
  const englishDate = getEnglishDate();

  const nextDateHandler = () => {
    console.log("next");
  };
  const prevDateHandler = () => {
    console.log("prev");
  };

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
