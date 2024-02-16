export const getPersianDate = (currentDate: Date): string => {

    const options: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', timeZone: 'Asia/Tehran' };
    const persianDate = currentDate.toLocaleDateString('fa-IR', options);
    return persianDate;
}

export const formatPersianDate = (date: Date) => {

    const year = (date.getFullYear() - 621).toString(); // Convert Gregorian year to Persian year
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return {yaer:year, month:month, day:day}


};
