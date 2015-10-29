function sqrtApproximation(number) {
	for (var i = 0; number >= i*i; i++) if (i*i === number) return i;
	return [i-1, i];
}

console.log(sqrtApproximation(4))
console.log(sqrtApproximation(5))
