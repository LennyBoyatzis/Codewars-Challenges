'use strict'

Array.prototype.square = function() {
	return this.map(i => i * i)
}

Array.prototype.cube = function() {
  return this.map(i => i * i * i)
}

Array.prototype.sum = function() {
  let total = this.reduce((prev, curr) => {
	return prev + curr
  }, 0)
  return total
}

Array.prototype.average = function() {
  return this.sum()/this.length
}

Array.prototype.even = function() {
  return this.filter(i => i % 2 == 0)
}

Array.prototype.odd = function() {
  return this.filter(i => i % 2 !== 0)
}
