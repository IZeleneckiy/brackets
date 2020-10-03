module.exports = function check(str, bracketsConfig) {
    bracketsConfig = bracketsConfig.reduce((a, b) => a.concat(b), ['', '']).reverse();
    let bracketsStack = [];
    for (let i = 0; i < str.length; i++) {
        let currentBracket = str[i];
        let indexOfCurrentBracket = bracketsConfig.indexOf(currentBracket);
        if (indexOfCurrentBracket % 2) { // если скобка открывающая
            bracketsStack.push(currentBracket);
        } else {
            if (bracketsStack[bracketsStack.length - 1] == bracketsConfig[indexOfCurrentBracket + 1]) { // если открывающая в стеке того же типа
                bracketsStack.pop();
            } else {
                if (bracketsConfig[indexOfCurrentBracket + 1] == currentBracket && !bracketsStack.includes(currentBracket)) { // если открывающая такая же как закрывающая и ее нет еще в стеке
                    bracketsStack.push(currentBracket);
                } else {
                    return false;
                }
            }
        }
    }
    return bracketsStack.length > 0 ? false : true;
}
