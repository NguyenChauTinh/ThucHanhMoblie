// Array funtions

// filter() funtions

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

var newSports = sports.filter(sports => {
    return sports.like > 5
})

console.log(newSports);


Array.prototype.myFilter = function(cb) {
    var arr = []
    for(var i = 0; i<this.length;++i)
    {
        if(cb(this[i],i))
        {
            arr.push(this[i])
        }

    }
    return arr;
}


var newSports2= sports.myFilter(sports => {
    return sports.like > 5
})

console.log(newSports2);