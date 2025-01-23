export const formatPhoneNumber = (phone: string) => {
    return phone.replace(/[()]/g, '');
};

export const formatDate = (dateString: string): string => {
    const months: { [key: string]: number } = {
        'января': 1,
        'февраля': 2,
        'марта': 3,
        'апреля': 4,
        'мая': 5,
        'июня': 6,
        'июля': 7,
        'августа': 8,
        'сентября': 9,
        'октября': 10,
        'ноября': 11,
        'декабря': 12
    };

    const parts = dateString.split(' ');
    if (parts.length !== 3) {
        return dateString;
    }

    const day = parseInt(parts[0], 10);
    const monthName = parts[1];
    const year = parseInt(parts[2], 10);

    const month = months[monthName];
    if (!month) {
        return dateString;
    }

    const formattedDay = String(day).padStart(2, '0');
    const formattedMonth = String(month).padStart(2, '0');

    return `${formattedDay}.${formattedMonth}.${year}`;
};
