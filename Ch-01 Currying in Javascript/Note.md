Q1 : What is Function Curring?
    Ans : Curring is when you break down a function that takes multiple arguments into a series of functions that each take only one argument.

    In JavaScript : 
    `function add(a,b){
        return a + b;
    }
    add(4,5);
    `

    Now Function curring
    `function add(a){
        return function (b){
            return a + b;
        }
    }
    1. add(3)(4); Output : 7
    2. let sum = add(3);
          sum(4); Output : 7 
    `
Q2 : What is Closure?
    Ans : Closure is concept in javascript that a function bundled together with teir the lexical environment.
                OR
    A closure gives you access to an outer function's from an inner function.
    2. Javascript, closures are created every time a function is created, at function creation time.

Q3 : What is bind Method?
    Ans : The bind method of function instaces creates a new function with its `this` keyword set to the provided value, and a given sequence of arguments preceding any provided when the new function is called.

    `let addTwo = sum.bind(this, 2);
     addTwo(4);`