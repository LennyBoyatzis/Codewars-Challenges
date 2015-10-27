'use strict'

function exampleFunc(n, m) {
	let sum = 0;
	for (var i = 0; i <= n; i++) {
		 sum += i % m
	};
	return sum
};

console.log(exampleFunc(15,10))


function f(n, m) {
	return Math.floor(n / m)* m * (m - 1) / 2 +(n % m) * (n % m + 1) / 2 
}
