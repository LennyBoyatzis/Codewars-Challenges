'use strict';
function calculateOptimalFare(D, T, V1, R, V2) {
	let hours = T/60;
	console.log("HOURS-->", hours);
	let kmPerHr = D / hours;
	console.log("kmPerHr-->", kmPerHr);
	if (V2 >= kmPerHr) {
		console.log("here 1");
		return R = 0.00
	} else if (V1 > kmPerHr) {
		console.log("here 2");
		R = (R * V1) * hours;
		return R.toFixed(2);
	} else if (kmPerHr > V2 && kmPerHr > V1) {
		console.log("here 3");
		return "Won't make it!"
	};
};
// console.log("Answer 1", calculateOptimalFare(8, 10, 90, 1, 6));
console.log("Answer 1", calculateOptimalFare(6, 70, 6, 1, 5));
// console.log("Answer 2", calculateOptimalFare(100, 10, 500, 5, 25));
