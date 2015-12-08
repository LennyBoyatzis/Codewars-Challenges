//Checking whether a variable is a number or a string in JS

// If dealing with literal notation, and not constructors, you can use typeof
// i.e. typeof "Hello World" // string
// i.e. typeof 123 // number

// If you're creating numbers and strings via a constructor,
// such as var foo = new String("foo"), you should keep in mind that typeof may return object for foo.

var typer = (function(value) {
	return {
		isString: function (value) {
			var toString = Object.prototype.toString;
			return toString.call(value) == '[object String]';
		},
		isNumber: function (value) {
			return !isNaN(parseFloat(value))
		}
	};
}(null));



//     isNumber: TO_BE_DEFINED_BY_YOU,
//     isArray: TO_BE_DEFINED_BY_YOU,
//     isFunction: TO_BE_DEFINED_BY_YOU,
//     isDate: TO_BE_DEFINED_BY_YOU,
//     isRegExp: TO_BE_DEFINED_BY_YOU,
//     isBoolean: TO_BE_DEFINED_BY_YOU,
//     isError: TO_BE_DEFINED_BY_YOU,
//     isNull: TO_BE_DEFINED_BY_YOU,
//     isUndefined: TO_BE_DEFINED_BY_YOU
