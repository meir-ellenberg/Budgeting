function render(month) {
    return `
        <header class="dark-blue-bg">
            <ul class="grid three-columns">
                <li>
                    <h1 class="logo">Budgeting</h1>
                </li>
                <li>
                    <h3 class="header nav">${renderMonth(month)}</h3>
                </li>
                <li>
                    <h4 class="header">Salaries</h4>
                    <ul class="grid">
                        ${renderSalaries(month.salaries)}
                    </ul>
                </li>
            </ul>
        </header>
        <main class="light-grey-bg">
            ${renderCategories(month.minorCategories, month.expenses)}
        </main>
    `
}

// function render(months) {
//     return `
//         ${months.map(month => `
//             <header>
//                 <ul>
//                     <li class="brand">
//                         <h1>Budgeting</h1>
//                     </li>
//                     <li class="month">
//                         <h2>${renderMonth(month)}</h2>
//                     </li>
//                     <li class="salaries">
//                         <h3>Salaries</h3>
//                         <ul>
//                             ${renderSalaries(month.salaries)}
//                         </ul>
//                     </li>
//                 </ul>
//             </header>
//             <aside>
//                 ${renderCategories(month.minorCategories, month.expenses)}
//             </aside>
//         `).join('')}
//     `;
// }

function renderSalaries(salaries) {
    return `
            ${salaries.map(salary => `
                <li>
                    <span>${salary.name}</span>
                    <span>${moneyFormat(salary.amount, 'NIS')}</span>
                </li>
            `).join('')}
            `
}

function renderMonth(month) {
    return `${month.month} - ${month.year}`;
}

function renderCategories(categories, expenses) {
    return `
            <ul class="grid row">${categories.map(category => `
                <li id="${renderIdTag(category.name)}" class="border">
                    <div class="dark-blue-bg">
                        <span>${category.name}</span>
                        <span>${category.budget}</span>
                        <span>${category.spent = budgetSpent(category, expenses)}</span>
                        <span>${budgetLeft(category.budget, category.spent)}</span>
                    </div>
                    <ul class="grid five-columns">
                        <li>Business</li>
                        <li>Amount</li>
                        <li>Method</li>
                        <li>Date</li>
                        <li>Comment</li>
                    </ul>
                    <ul>${expenses.map(expense => (expense.minorCategory === category.name) ? `
                        <li class="expense white-bg">
                            <ul class="grid five-columns">
                                <li>${expense.businessName}</li>
                                <li>${moneyFormat(expense.amount, 'nis')}</li>
                                <li>${expense.paymentMethod}</li>
                                <li>${dateFormat(expense.date)}</li>
                                <li>${expense.comment}</li>
                            </ul>
                        </li>` : null).join('')}
                    </ul>`).join('')}
                </li>
            </ul>
            `
}

function renderIdTag(name) {
    return `category--${name}`.toLowerCase();
}