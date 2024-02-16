
export function getHijriDayOfMonth(currentDate: Date) {
 
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' };
    const hijriDayOfMonth = currentDate.toLocaleDateString('ar-u-ca-islamic', options);
    return hijriDayOfMonth;
}
