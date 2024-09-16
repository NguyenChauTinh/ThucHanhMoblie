let mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
}

let john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
}

bmiMark = mark.calcBMI();
bmiJohn = john.calcBMI();

let result = bmiMark > bmiJohn ? `${mark.fullName}'s BMI (${bmiMark}) is higher than ${john.fullName}'s (${bmiJohn})!` 
: `${john.fullName}'s BMI (${bmiJohn}) is higher than ${mark.fullName}'s (${bmiMark})!`;

console.log(result);