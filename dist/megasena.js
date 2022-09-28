var numSorteio = [];
var mega = function () {
    for (var i = 0; i < 6; i++) {
        var num = Math.floor(Math.random() * 60);
        if (numSorteio.indexOf(num) == -1) {
            numSorteio.push(num);
        }
        else {
            i--;
        }
    }
    ;
    return numSorteio;
};
