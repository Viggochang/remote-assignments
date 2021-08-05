/*
In JavaScript, there are many different sets of syntax for creating objects. 
In the code below, function parameters are encapsulated into an object, 
try using at least two ways to create a proper object as a parameter of the calculate function.
*/

// create a proper object as a parameter !!

function calculate(args) {
    let result;
    if (args.op === "+") {
        result = args.n1 + args.n2;
    } else if (args.op === "-") {
        result = args.n1 - args.n2;
    } else {
        result = "Not supported";
    }
    return result;
}

var args1 = {};
args1.n1 = 3;
args1.n2 = 4;
args1.op = "-";
console.log(calculate(args1));


function argsFunc(n1, n2, op) {
    this.n1 = n1;
    this.n2 = n2;
    this.op = op;
}
const args2 = new argsFunc(3, 4, "+");
console.log(calculate(args2));

class argsClass {
    constructor(n1, n2, op) {
        this.n1 = n1;
        this.n2 = n2;
        this.op = op;
    }
}
const args3 = new argsClass(3, 4, "-");
console.log(calculate(args3));

var args4 = {
    get n1() {
        return this._n1;
    },
    set n1(n1) {
        this._n1 = n1;
    },

    get n2() {
        return this._n2;
    },
    set n2(n2) {
        this._n2 = n2;
    },

    get op() {
        return this._op;
    },
    set op(op) {
        this._op = op;
    },
};
args4.n1 = 3;
args4.n2 = 4;
args4.op = "+"

console.log(calculate(args4));