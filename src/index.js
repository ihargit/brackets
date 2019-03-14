module.exports = function check(str, bracketsConfig) {
  // your solution
  let brackets = []; // array (stack) to store characters
  let popped; // shows if character was added to the stack array

  // iterate through string
  for (let i = 0; i < str.length; i++) {
    popped = false;

    // iterate through bracketsConfig array
    for (let b = 0; b < bracketsConfig.length; b++) {
      //check if there is coincidence between the last stack character, current string character and the subconfig
      if (brackets[brackets.length - 1] === bracketsConfig[b][0] && str[i] === bracketsConfig[b][1]) {
        //delete character from the stack
        brackets.pop();
        popped = true;
        break;
      }
    }

    if (popped === false) {
      //add character to the stack
      brackets.push(str[i]);
    }
  }

  if (brackets.length > 0) {
    return false;
  } else {
    return true;
  }
}
