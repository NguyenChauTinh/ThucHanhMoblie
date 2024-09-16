// Array funtions

// every() funtions

const sports = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
]

var newSports = sports.every(sports => {
    return sports.like > 4
})

console.log(newSports);

Array.prototype.myEvery = function(cb) {
    for(var i = 0; i<this.length;++i)
    {
        if(!cb(this[i],i))
        {
            return false
        }

    }
    return true;
}


var newSports2= sports.myEvery(sports => {
    return sports.like > 5
})

console.log(newSports2);


