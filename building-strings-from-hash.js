function solution(pairs) {
    var counter = 0;
    var keyValueString = '';
    for (var property in pairs) {
        if (pairs.hasOwnProperty(property)) {
            counter++
            var stringJoin = counter !== (Object.keys(pairs).length) ? ', ' : '';
            keyValueString += property + ' = ' + pairs[property] + stringJoin;
        }
    };
    return keyValueString
}
//
console.log(solution({
    a: 1,
    b: '2',
    c: '3',
    d: 23
}))

//Best practice
// function solution(pairs){
//   return Object.keys(pairs)
//     .map(function(k) { return k + ' = ' + pairs[k] })
//     .join(',');
// }
