let annualIncome = 10000, tax = 0, status = "F";
switch (status) {
    case "F":
        if (annualIncome < 10000) tax = 100
        if (annualIncome > 10000 || annualIncome < 25000) tax = (5 / 100) * 10000
        if(annualIncome > 15000) tax = (15 / 100) * 10000
        break;
        
    case "C":
        if (annualIncome < 8000) tax = 150
        if (annualIncome > 8000 || annualIncome < 15000) tax = (10 / 100) * 10000
        if(annualIncome > 15000) tax = (10 / 100) * 20000
        break;
}

console.log(tax)