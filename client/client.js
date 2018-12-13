let main = document.querySelector('main');

let months = [{
    month: 11,
    year: 2018,
    
    salaries: [
        {
            name: 'Meir',
            amount: 10000
        },
        {
            name: 'Karin',
            amount: 10000
        }
    ],
    
    // Cell Phone, Internet, Water, Fuel...
    minorCategories: [
        {
            name: 'Groceries',
            budget: 2500,
            spent: 700,
            comment: ''
        },
        {
            name: 'Fuel',
            budget: 800,
            spent: 240,
            comment: ''
        },
    ],
    
    // Expanse name: Shufersal, Paz...
    expenses: [
        {
            businessName: 'Shufersal',
            amount:  450,
            paymentMethod: 'Credit Card',
            date: new Date(2018, 10, 3),
            comment: '',
            minorCategory: 'Groceries'
        },
        {
            businessName: 'Delek',
            amount:  237,
            paymentMethod: 'Cash',
            date: new Date(2018, 10, 4),
            comment: '',
            minorCategory: 'Fuel'
        },
        {
            businessName: 'Rami Levi',
            amount:  250,
            paymentMethod: 'Credit Card',
            date: new Date(2018, 10, 5),
            comment: '',
            minorCategory: 'Groceries'
        },
        {
            businessName: 'Paz',
            amount:  240,
            paymentMethod: 'Credit Card',
            date: new Date(2018, 10, 8),
            comment: '',
            minorCategory: 'Fuel'
        }
    ]
}];

main.innerHTML = render(months);