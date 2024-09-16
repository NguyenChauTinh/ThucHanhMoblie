// Array funtions

// some() funtions

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

var newSports = sports.some(sports => {
    return sports.like < 5
})

console.log(newSports);

Array.prototype.mySome = function(cb) {
    for(var i = 0; i<this.length;++i)
    {
        if(cb(this[i],i))
        {
            return true
        }

    }
    return false;
}

var newSports2= sports.mySome(sports => {
    return sports.like > 5
})

console.log(newSports2);

