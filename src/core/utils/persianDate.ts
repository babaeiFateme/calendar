const getPersianDate = (): string => {
    const currentDate = new Date();
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', timeZone: 'Asia/Tehran' };
    const persianDate = currentDate.toLocaleDateString('fa-IR', options);
    return persianDate
}
export default getPersianDate