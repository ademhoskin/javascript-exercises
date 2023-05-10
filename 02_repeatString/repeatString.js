const repeatString = function(string, integer) {
    if (integer < 0) {
        return "ERROR";
    }
    let newString = "";
    for (let i = 0; i < integer; i++) {
        newString += string;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
