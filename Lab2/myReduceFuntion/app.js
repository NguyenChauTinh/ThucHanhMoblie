// Array funtions

// reduce() funtions

const sports = [
    {
        name: 'Bóng rổ',
        like: 6,
        coin: 100
    },
    {
        name: 'Bơi lội',
        like: 5,
        coin: 200
    },
    {
        name: 'Bóng đá',
        like: 10,
        coin: 300
    },
]

var newSports = sports.reduce((total,sports) => {
    return total + sports.coin
},100)

console.log(newSports);

Array.prototype.myReduce = function(cb,initialValue) {
    var total = initialValue;
    for(var i = 0; i<this.length;++i)
    {
        total = cb(total,this[i])
    }
    return total;
}

var newSports2= sports.myReduce((total,sports) => {
    return total + sports.coin
},0)

console.log(newSports2);

