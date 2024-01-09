// obj1 = {
//     id: 1,
//     name: 'ranjan',

//     printme: function () {
//         console.log(`Wlcome ${this.name} your id is ${this.id}`)
//     }
// }

// obj1.printme();

// obj2 = {
//     id: 4,
//     name: 'abhay',
// }

// // Function Borrowing
// obj1.printme.call(obj2);

obj1 = {
    id: 1,
    name: 'ranjan',

}
function printme(fruit1, fruit2) {
    console.log(`Wlcome ${this.name} your id is ${this.id} would u like to have an ${fruit1} , ${fruit2}`)
}

// obj1.printme();

obj2 = {
    id: 4,
    name: 'abhay',
}

arr = ["Apple", "banana"];
// Function Borrowing
// printme.apply(obj2, ...arr);



// function passToFunction() {
//     arrayToPass = ["Apple", "banana"];

//     unmodifiableFunction(...arrayToPass);
// }

// function unmodifiableFunction(a, b, c) {
//     console.log(`First value is: ${a}
// Second value is: ${b}
// Third value is:  ${c}`)
// }
// passToFunction()

myobj = {
    id: 1,
}

function printDetails() {
    console.log(this.id);
}
result = printDetails.bind(myobj);

result();