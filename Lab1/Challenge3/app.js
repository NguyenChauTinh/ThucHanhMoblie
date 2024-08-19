dophinsScore = [96, 108, 89];
koalasScore = [88, 91, 110];

const calcAverage = (score) => {
    return score.reduce((a, b) => a + b) / score.length;
}

var avgDolphins = calcAverage(dophinsScore);
var avgKoalas = calcAverage(koalasScore);

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins > avgKoalas && avgDolphins >= 100) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas > avgDolphins && avgKoalas >= 100) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`No team wins`);
    }
}

console.log('Times 1:');

checkWinner(avgDolphins, avgKoalas);

dophinsScore = [97, 112, 101];
koalasScore = [109, 95, 123];

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
