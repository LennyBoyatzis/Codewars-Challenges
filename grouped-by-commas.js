function groupByCommas(n) {
	return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// Above regex uses 2 lookahead assertions
// 1. A positive one to look for any point in the string that has a multiple of 3 digits in a row after it
// 2. A negative assertion to make sure that point only has exactly a multiple of 3 digits
// The replacement expression puts a comma there

console.log("Output", groupByCommas(1000));
console.log("Output", groupByCommas(10000));
console.log("Output", groupByCommas(100000));
console.log("Output", groupByCommas(1000000));
console.log("Output", groupByCommas(10000000));
