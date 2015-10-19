'use strict';

function formatString(string) {
    if (string.length === 0) return null
    return string
                .replace(/\W+/g, " ")
                .replace(" ", "")
                .replace(/(.)(?=.*\1)/g, "")
}

function charToAscii(string) {
    let obj = {};
    let formattedString = formatString(string);
    console.log("here is the formatted string", formattedString);
    let stringArray = formattedString.split('');
    stringArray.map((char) => { return obj[char] = char.charCodeAt()});
    return obj
};
console.log("Here it is", charToAscii("Hello World"));
