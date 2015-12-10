'use strict';

function abbreviate(str) {
	var wordArray = str.split(" ")
	var ss = ''
	var newArray = wordArray.map((i) => {
		return i.charAt(0) + (i.length - 2) +i.charAt(i.length - 1);
	})
	newArray.forEach((i) => {
		ss += i + ' ';
	})
	return ss;
}
