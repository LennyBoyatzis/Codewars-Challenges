// Using iterables, generators, fat arrows and for-of to write more succinct and modular code

//=======================
// Higher Order functions
//=======================

// A higher order function does one of the following (or both)
// 1. It accepts one or more functions as parameters
// 2. It returns a function

vowelOccurences (file) => {
    return map(words => map(vowelCount, words), listOfWordsByLine(read(file)))
}

vowelCount (word) => {
    return reduce((prev, char) => {
        if (
          'a' === char || 'e' === char || 'i' === char || 'o' === char || 'u' === char
        ) return ++prev
        else return prev
        }, 0, word)
}

listOfWordsByLine (string) => {
  return map(line => split(/\s+/, line), split('\n', string))
}
// reusable utils in util.js
reduce (fn, accumulator, list) => {
  return [].reduce.call(list, fn, accumulator)
}

map (fn, list) => {
  return [].map.call(list, fn)
}

split (splitOn, string) => {
  return string.split(splitOn)
}
