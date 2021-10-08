function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length-1; i >= 0 ; i--) { reversedStr += str[i] }
  return reversedStr;
}

if (require.main === module) {

  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));

  console.log("");

  // ~~> my custom tests are below <~~

  console.log("Expecting: 'racecar'");
  console.log("=>", reverseString("racecar"));

  console.log("");

  console.log("Expecting: 'redrum'");
  console.log("=>", reverseString("murder"));

  console.log("");

  console.log("Expecting: '867-5309'");
  console.log("=>", reverseString("9035-768"));

  console.log("");

  console.log("Expecting: 'hi everyone!'");
  console.log("=>", reverseString("!enoyreve ih"));

  console.log("");
}

module.exports = reverseString;

/*
~~> rewording: <~~
  write a function that takes in a any string and returns said string with characters reversed.
*/
/*
~~> pseudo-code: <~~
  A) create an empty array
  B) loop through string with a for loop, starting from the end
    ->push each element to the empty array
  C) turn array into a string
  D) return reversed word  
*/
/*
~~> explanation: <~~
  A) Very straightforward task.
  B) I used a for loop to save from calling split() on "str".
  C) I looped backwards so I could build "reversedStr" by concatenating
    each letter to the end of an empty string.
  D) I returned the built "reversedStr"

  aside:
    - doesn't check "str" for any values so any string will work, even "".
    - doesn't deal with undefined.
*/