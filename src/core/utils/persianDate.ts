export const getPersianDate = (currentDate: Date): string => {
    let options: object = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' }
    let date = currentDate.toLocaleDateString('fa-IR', options)
    return date;
}

export const formatPersianDate = (date: Date) => {
    let today = ""
    let todyaArr = []
    today = date.toLocaleDateString('fa-IR')
    todyaArr = today.split("/")
    return { year: todyaArr[0], month: todyaArr[1], day: todyaArr[2] }
};
