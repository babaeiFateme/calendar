const persianDayName = (): string => {
    const currentDate = new Date();
    console.log(currentDate);
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', timeZone: 'Asia/Tehran' };
    const day = currentDate.toLocaleDateString('fa-IR', options);
    console.log(day);
    return day
}

export default persianDayName