// Array funtions

// forEach() funtions

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

var newSports = sports.forEach(sports => {
    console.log(sports.name)
})

console.log("---------");


Array.prototype.myForEach = function(cb) {
    for(var i = 0; i<this.length;++i)
    {
        cb(this[i],i)
    }
}

var newSports2= sports.myForEach(sports => {
    console.log(sports.name)
})

