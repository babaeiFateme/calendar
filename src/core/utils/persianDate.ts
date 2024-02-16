export const getPersianDate = (currentDate: Date): string => {

    const options: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', timeZone: 'Asia/Tehran' };
    const persianDate = currentDate.toLocaleDateString('fa-IR', options);
    return persianDate;
}

export const formatPersianDate = (date: Date) => {
    let today = ""
    let todyaArr = []
     today = date.toLocaleDateString('fa-IR')
     todyaArr = today.split("/")
    return { year: todyaArr[0], month: todyaArr[1], day: todyaArr[2] }
};
