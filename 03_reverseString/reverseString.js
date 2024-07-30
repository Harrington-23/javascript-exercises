const reverseString = function(word) {
  let original = word;
  let reversed = original.split('').reverse().join('');
  return reversed;
};

// Do not edit below this line
module.exports = reverseString;
