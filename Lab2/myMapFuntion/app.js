// Array funtions

// map() funtions

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

var newSports = sports.map(sports => {
    return sports
})

console.log(newSports);



Array.prototype.myMap = function(cb) {
    var arr = []
    for(var i = 0; i<this.length;++i)
    {
        arr[i] = cb(this[i],i)

    }
    return arr;
}

var newSports2= sports.myMap(sports => {
    return sports
})

console.log(newSports2);