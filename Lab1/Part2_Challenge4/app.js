let bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52],
tip = [], total = [];

const calcTip = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for(let value of bill) {
    tip.push(calcTip(value));
    total.push(value + calcTip(value));
}

console.log('Bill:', bill);
console.log('Tip:', tip);
console.log('Total:', total);


