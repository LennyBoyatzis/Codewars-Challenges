// function divisibleCount(x, y, k) {
// 	var range = [];
// 	for (var i = x; i <= y; i++) {
// 		range.push(i)
// 	}
// 	return range.filter(i => {
// 		return i % k === 0 ;
// 	}).length
// }
//
// console.log(divisibleCount(10, 20, 2));

const divisibleCount = (x, y, k) => {
	return Math.floor(y / k) - Math.floor((x - 1) / k);
}

console.log(divisibleCount(10, 20, 2));
