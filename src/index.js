module.exports = function check(str, bracketsConfig) {
  // your solution

  let brackets = [];
  for (let bracket in str) {
    for (let bracketPair in bracketsConfig) {
      if (brackets[brackets.length - 1] === bracketPair[0] && bracket === bracketPair[1]) {
        brackets.pop();
        break;
      } else {
        brackets.push(bracket);
      }
    }
  }
  console.log(brackets);
  if (brackets.length > 0) {
    return false;
  } else {
    return true;
  }
}