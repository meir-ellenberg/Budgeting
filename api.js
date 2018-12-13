// GET /2018/8/
// POST /main/2018/8 
// POST /minor/2018/8 
// POST /expenses/2018/8

// Budget Schema
months: [{
    // startDate: Date, // first day of the month
    // endDate: Date, // last day of the month
    month: Number,
    year: Number,
    
    salaries: [{
        name: String,
        amount: Number
    }],
    
    // // Main Category: Communication, Housing, Shopping...
    // mainCategories: [{
    //     name: String,
    // }],
    
    // Cell Phone, Internet, Water, Fuel...
    minorCategories: [{
        name: String,
        budget: Number,
        spent: Number,
        comment: String,
        // mainCategory: String // Housing, Shopping...
    }],

    // Expanse name: Shufersal, Paz...
    expenses: [{
        businessName: String,
        amount:  Number,
        paymentMethod: String,
        date: Date,
        comment: String,
        minorCategory: String
    }]
}];



