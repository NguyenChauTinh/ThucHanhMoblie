foreCast1 = [17,21,23];
foreCast2 = [12,5,-5,0,4];

function printForecast(foreCastValue) {
    for(let value of foreCastValue) {
        console.log(`${foreCastValue.indexOf(value) + 1} days: ${value} degrees Celsius`);
    }
}

printForecast(foreCast1);
printForecast(foreCast2);