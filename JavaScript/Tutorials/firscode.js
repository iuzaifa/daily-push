

// my first js code 
function add(a, b){
    return a + b;
}
console.log(add(3,5));

function sum(a){
    return function (b) {
      return a + b;
    };
}

console.log(sum(2)(3))

function name(firstname){
    return function (lastname){
        return firstname + " "+ lastname;
    }
}
let fname = "Abu";
let lname = "Huzaifa";
console.log(name(fname)(lname))
console.log(name(fname)(''))

