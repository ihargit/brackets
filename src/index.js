module.exports = function check(str, bracketsConfig) {
  // your solution

  let brackets = [];
  for (let i = 0; i < str.length; i++) {
    for (let b = 0; b < bracketsConfig.length; b++) {
      if (brackets[brackets.length - 1] === bracketsConfig[b][0] && str[i] === bracketsConfig[b][1]) {
        brackets.pop();
        break;
      } else {
        brackets.push(str[i]);
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