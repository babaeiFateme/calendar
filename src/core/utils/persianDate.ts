const getPersianDate = (currentDate: Date): string => {
    if (!currentDate) {
        throw new Error("currentDate is not defined");
    }

    const options: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', timeZone: 'Asia/Tehran' };
    const persianDate = currentDate.toLocaleDateString('fa-IR', options);
    return persianDate;
}

export default getPersianDate;
