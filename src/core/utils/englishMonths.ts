

export const getEnglishDate = (currentDate: Date) => {
    const monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const month = monthArr[currentDate.getMonth()]
    const day = days[currentDate.getDay()]
    const year = currentDate.getFullYear()
    return `${day} , ${month} ${currentDate.getDate()} , ${year} `
};

export const formatDate = (date: Date) => {

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return { year: year, month: month, day: day };
};

