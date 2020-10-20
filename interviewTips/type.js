//Simple types

console.log("hi");      // String
console.log(1);         // Number
console.log(true);      // Boolean
console.log(null);      // Null
console.log(undefined); // Undefind
console.log(+"sdfaf");  // Number (NaN)
console.log(10/0)       // Number Infinity
console.log(-10/0)      // Number -Infinity
console.log(Symbol())   // Symbol

// Object
class Car{}

console.log({});       // Object
console.log([]);       // Object Array
console.log(new Car()) // Object Class

console.log(typeof(() => {})) // Object Function




function Foo(){
    const undef = undefined;
    return function getUndef(){
        return undef
    }

}

const makeUndef = Foo();
console.log(makeUndef())