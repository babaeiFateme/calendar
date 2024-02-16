export const getEnglishDate = (currentDate: Date) => {
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' };
    const getEnglishDate = currentDate.toLocaleDateString('en-US', options);
    return getEnglishDate;
};

export const formatDate = (date:Date) => {

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const formattedDate = year + '-' + month + '-' + day;
    return formattedDate;
};

