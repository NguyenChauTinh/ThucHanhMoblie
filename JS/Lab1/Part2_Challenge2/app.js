let bill = [125,555,44], tip = [], total = [];

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


