// Wrap the entire contents of script.js inside of an IIFE
(function() {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

// Loop over the names array and say either 'Hello' or "Good Bye"
// using the 'speak' method or either helloSpeaker's or byeSpeaker's
// 'speak' method.
for (var name in names) {

  // Retrieve the first letter of the current name in the loop.
  var firstLetter = names[name].charAt(0).toLowerCase();
  
  // Compare the 'firstLetter' retrieved to lower case
  // 'j'. If the same, call byeSpeaker's 'speak' method with the current name
  // in the loop. Otherwise, call helloSpeaker's 'speak' method with the current name in the loop.
  if (firstLetter == "j") {
    byeSpeaker.speak(names[name]);
  } else {
    helloSpeaker.speak(names[name]);
  }
}

})();
