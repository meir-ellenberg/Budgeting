function render(months) {
    return `
        ${months.map(month => `
            <header>
                <ul>
                    <li class="brand">
                        <h1>Budgeting</h1>
                    </li>
                    <li class="month">
                        <h2>${renderMonth(month)}</h2>
                    </li>
                    <li class="salaries">
                        <h3>Salaries</h3>
                        <ul>
                            ${renderSalaries(month.salaries)}
                        </ul>
                    </li>
                </ul>
            </header>
            <aside>
                ${renderCategories(month.minorCategories, month.expenses)}
            </aside>
        `).join('')}
    `;
}

function renderSalaries(salaries) {
    return `
            ${salaries.map(salary => `
                <li><span class="person">${salary.name}</span> <span class="salary-amount">${moneyFormat(salary.amount, 'NIS')}</span></li>
            `).join('')}
            `
}

function renderMonth(month) {
    return `${month.month} - ${month.year}`;
}

function renderCategories(categories, expenses) {
    return `
            <ul class="categories">${categories.map(category => `
                <li id="${renderIdTag(category.name)}" class="category">
                    ${category.name} Budget: ${category.budget} Spent: ${category.spent}
                    <ul class="expenses">${expenses.map(expense => (expense.minorCategory === category.name) ? `
                        <li class="expense">
                            <ul class="details">
                                <li>${expense.businessName}</li>
                                <li>${moneyFormat(expense.amount, 'nis')}</li>
                                <li>${expense.paymentMethod}</li>
                                <li>${dateFormat(expense.date)}</li>
                                <li>${expense.comment}</li>
                            </ul>
                        </li>` : ``).join('')}
                    </ul>`).join('')}
                </li>
            </ul>
            `
}

function renderIdTag(name) {
    return `category--${name}`.toLowerCase();
}