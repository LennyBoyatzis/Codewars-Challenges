// Your task is to write a higher order function for chaining together a list of unary functions. In other words, it should return a function that does a left fold on the given functions.

// chained([a,b,c,d])(input)

// d(c(b(a(input))))

// functions is an array of functions

function chained(functions) {
    return function(input){
        return functions.reduce(function(input, fn) {return fn(input) }, input);
    }
}

var total = [0, 1, 2, 3].reduce(function(a, b) {
    return a + b;
});

var sum = [1, 2, 3].reduce(
  function(total, num){ return total + num }
  , 0);
