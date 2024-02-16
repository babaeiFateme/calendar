export function getEnglishDate() {
    const currentDate = new Date();
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' };
    const getEnglishDate = currentDate.toLocaleDateString('en-US', options);
    return getEnglishDate;
}
