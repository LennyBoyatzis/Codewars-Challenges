'use strict';

function maskify(cc) {
    let revealedLetters = cc.substring(cc.length - 4, cc.length);
    let hashedLetters = cc.substring(0, cc.length -4).replace(/([0-9])/g, "#");
    console.log(hashedLetters + revealedLetters);
    return hashedLetters + revealedLetters
};

maskify("4556364607935616");
maskify('1');
maskify('11111');
