// Array funtions

// splice() funtions

// Create an Array
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, add "Lemon" and "Kiwi":
fruits.splice(2, 0, "Lemon", "Kiwi");

console.log(fruits);
console.log("-----delete----");
fruits.splice(2, 1);
console.log(fruits);

console.log("-----mySplice----");


Array.prototype.mySplice = function(start,deleteCount,...items) {
    var deleted = [];
    for(var i = start; i<start+deleteCount;++i)
    {
        deleted.push(this[i]);
        this[i] = items[i-start];
    }
    return deleted;
}

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits2.mySplice(2, 0, "Lemon", "Kiwi"));
console.log(fruits2);
console.log("-----delete----");
console.log(fruits2.mySplice(2, 1));


