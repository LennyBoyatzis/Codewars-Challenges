'use strict';

palindrome(s) => {
    s = s.toLowerCase().replace(/[^a-z0-9]/g,'')
    let revString = '';
    for (var i = s.length - 1; i >= 0; i--) {
        revString += s[i];
    }
    return revString === s
}
