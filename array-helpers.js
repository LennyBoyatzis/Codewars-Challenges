'use strict'

Array.prototype.square = function() {
	let newArr = this.forEach(function (i) {
		return i * i
	})
	return newArr
}

let numbers = [1,2,3,4,5]
console.log(numbers.square())
