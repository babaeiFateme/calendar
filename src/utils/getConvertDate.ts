export const getCovertDate = (currentDate: Date, type:string): string => {
    let options: object = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' }
    let date = currentDate.toLocaleDateString(`${type}`, options)
    return date;
}
