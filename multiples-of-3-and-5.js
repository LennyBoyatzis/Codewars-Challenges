'use strict';
let newArr;

function solution(number){
	if (typeof number !== 'number') return
	newArr = Array.apply(null, Array(number)).map((_, i) => {
    	return (i % 3 === 0 || i % 5 === 0) ? i : null
	});
	newArr = newArr.filter(Number)
	let total = 0
	newArr.map(i => {
		total += i
	})
	return total
}

console.log(solution(10));
