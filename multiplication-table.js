function multiplicationTable(size) {
	var result = [], line;

	for(var y = 0; y < size; y++) {
		result.push(line = []);
		for (x = 0; x < size; x++) {
			line.push((y + 1) * (x + 1));
		};
	};
	return result;
};

console.log('Table', multiplicationTable(4));
