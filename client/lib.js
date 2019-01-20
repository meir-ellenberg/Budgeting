const currencies = {
    'euro'  : '&euro;',
    'dollar': '&dollar;',
    'nis'   : '&#x20AA;'
};

// Format a Date as DD-MM-YYYY
function dateFormat(date) {
    date = new Date(date);
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
}

// Format a number with commas and currency
function moneyFormat(number, currency) {
    currency = currency.toLowerCase();
    return (currency === 'nis') ? `${number.toLocaleString()}${currencies[currency]}` : `${currencies[currency]}${number.toLocaleString()}`;
}

function budgetSpent(category, expenses) {
    expenses.map(expense => (category.name === expense.minorCategory) ? category.spent += expense.amount : category.spent += 0);
    return category.spent;
}

function budgetLeft(budget, spent) {
    let left = budget - spent;
    console.log((spent * 100) / budget);
    // no budget left - missing style property
    if (left <= 0) {
        return left;
    }
    // budget almost gone - missing style property
    if ((spent * 100) / budget >= 80) {
        return left;
    }
    
    return left;
}

function request(method, url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.addEventListener('load', e => {
        callback(JSON.parse(e.target.responseText));
    });
    xhr.send();
}