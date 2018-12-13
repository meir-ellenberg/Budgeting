const currencies = {
    'euro'  : '&euro;',
    'dollar': '&dollar;',
    'nis'   : '&#x20AA;'
};

function dateFormat(date) {
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
}

function moneyFormat(number, currency) {
    currency = currency.toLowerCase();
    return (currency === 'nis') ? `${number.toLocaleString()}${currencies[currency]}` : `${currencies[currency]}${number.toLocaleString()}`;
}