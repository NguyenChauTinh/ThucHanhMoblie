markHigherBMI = false;
massMark = 78;
heightMark = 1.69;

massJohn = 92;
heightJohn = 1.95;

BMIMark = massMark / heightMark ** 2;
BMIJohn = massJohn / heightJohn ** 2;

if (BMIMark > BMIJohn) {
    markHigherBMI = true;
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
    
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}