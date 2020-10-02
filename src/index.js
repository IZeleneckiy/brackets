module.exports = function check(str, bracketsConfig) {
    bracketsConfig = bracketsConfig.reduce((a, b) => a.concat(b));
    let bracketsStack = [];
    for (let i = 0; i < str.length; i++) {
        let currentBracket = str[i];
        let indexOfBracket = bracketsConfig.indexOf(currentBracket);
        if (indexOfBracket % 2) {
            if (bracketsStack.pop() !== bracketsConfig[indexOfBracket - 1]) {
                return false;
            }
        } else {
            if (currentBracket == bracketsConfig[indexOfBracket + 1]) {
                if (bracketsStack.length > 0) {
                    if (bracketsStack[bracketsStack.length - 1] != currentBracket) {
                        if (bracketsStack.includes(currentBracket)) {
                            return false;
                        } else bracketsStack.push(currentBracket);
                    } else bracketsStack.pop();
                } else {
                    bracketsStack.push(currentBracket);
                }
            } else {
                bracketsStack.push(currentBracket);
            }
        }
    }
    return bracketsStack.length > 0 ? false : true;
}
