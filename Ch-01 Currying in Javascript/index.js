let multiply = function (x,y){
    console.log(x*y);
}
// Same as bind method
// let multiplyByTwo = function (y){
//     let x = 2;
//     console.log(x*y);
// }

// First Method to Do Function Curring
let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5);

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5);

// Second Method to Do Function Curring
let mul = function (x){
    return function (y){
        console.log(x*y);
    }
}

let mulByTwo = mul(2);
mulByTwo(5);

let mulByThree = mul(3);
mulByThree(5);