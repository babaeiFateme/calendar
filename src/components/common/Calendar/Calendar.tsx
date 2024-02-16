import React, { useEffect, useState } from 'react';
import { getHijriDayOfMonth } from '../../../core/utils/hijriMonths';

import Button from '../Button/Button';
import { getEnglishDate } from '../../../core/utils/englishMonths';
import getPersianDate from '../../../core/utils/persianDate';

const Calendar = () => {
  const [strDate, setStrDate] = useState("");
  const [hijriDayOfMonth, setHijriDayOfMonth] = useState("");
  const [englishDate, setEnglishDate] = useState("");

  useEffect(() => {
    const currentDate = new Date();
    setStrDate(getPersianDate(currentDate));
    setHijriDayOfMonth(getHijriDayOfMonth(currentDate));
    setEnglishDate(getEnglishDate(currentDate));
  }, []);

  const updateDates = (dateModifier:number) => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + dateModifier);

    setStrDate(getPersianDate(currentDate));
    setHijriDayOfMonth(getHijriDayOfMonth(currentDate));
    setEnglishDate(getEnglishDate(currentDate));
  };

  const nextDateHandler = () => {
    updateDates(1);
  };

  const prevDateHandler = () => {
    updateDates(-1);
  };

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
