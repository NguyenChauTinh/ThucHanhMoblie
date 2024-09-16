let bill = 275, tip = 0, total = 0;

const calcTip = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

tip = calcTip(bill);

total = bill + tip;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`);