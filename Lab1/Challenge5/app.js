dophinsScore = [44, 23, 71];
koalasScore = [65, 54, 49];

const calcAverage = (score) => {
    return score.reduce((a, b) => a + b) / score.length;
}

var avgDolphins = calcAverage(dophinsScore);
var avgKoalas = calcAverage(koalasScore);

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins > 2 * avgKoalas && avgDolphins) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas > 2 * avgDolphins && avgKoalas) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`No team wins`);
    }
}


console.log('Times 1:');

checkWinner(avgDolphins, avgKoalas);

dophinsScore = [85, 54, 41];
koalasScore = [23, 34, 27];

avgDolphins = calcAverage(dophinsScore);
avgKoalas = calcAverage(koalasScore);

console.log('Times 2:');

checkWinner(avgDolphins, avgKoalas);

dophinsScore = [97, 112, 101];
koalasScore = [109, 95, 106];

avgDolphins = calcAverage(dophinsScore);
avgKoalas = calcAverage(koalasScore);

console.log('Times 3:');
checkWinner(avgDolphins, avgKoalas);
