import React, { useState, useEffect } from 'react';

const Time = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  }, []);

  const tick = () => {
    setTime(new Date());
  };

  const formatTime = (value: number) => {
    return value < 10 ? '0' + value : value.toString();
  };

  return (
    <div className="flex justify-between gap-3 flex-wrap items-center mt-[40px] mb-8">
      <div className='flex flex-col gap-3'>
        <span className='text-green-400'>امروز چندمه ؟</span>
        <span>تاریخ شمسی ، میلادی و قمری امروز به همراه ساعت ایران</span>
      </div>
      <div className='flex gap-2 items-center flex-row-reverse'>
        <span className=' p-[15px] box'>{formatTime(time.getHours())}</span> :
        <span className='p-[15px] box'>{formatTime(time.getMinutes())}</span> :
        <span className='p-[15px] box'>{formatTime(time.getSeconds())}</span>
      </div> 
    </div>
  );
};


export default Time;
