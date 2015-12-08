function array_diff(a, b) {
	return a.filter((i) => {
		b.map((k) => {
			console.log("I", i);
			console.log("k", k);
			i !== k ? a.push()
		})
	})
}

console.log(array_diff([1,2,3], [2]));
