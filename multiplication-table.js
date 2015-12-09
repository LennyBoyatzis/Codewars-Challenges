function multiplicationTable(size) {
	var result = [], line;

	// y - row
	// x - column

	for(var y = 0; y < size; y++) {
		result.push(line = []);
		for (x = 0; x < size; x++) {
			line.push((y + 1) * (x + 1));
		};
	};
	return result;
};

console.log('Table', multiplicationTable(4));

// Alternative solution

// fun.apply(thisArg, [argsArray])

multiplicationTable = function(size) {
	return Array.apply(null, new Array(size)).map(function(val, i) {
		return Array.apply(null, new Array(size)).map(function(val, j) {
			return (i+1) * (j+1);
		});
	});
};

console.log("testFunc", testFunc(4));
