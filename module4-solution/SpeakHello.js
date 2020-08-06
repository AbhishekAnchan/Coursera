// Wrap the entire contents of SpeakHello.js inside of an IIFE
(function(){

	// Create an object, called 'helloSpeaker' to which you will attach
	// the "speak" method and which you will expose to the global contex
	var helloSpeaker = {};

	var speakWord = "Hello";

	// Rewrite the 'speak' function such that it is attached to the helloSpeaker object 
	helloSpeaker.speak = function (name) {
	  console.log(speakWord + " " + name);
	}

	// Expose the 'helloSpeaker' object to the global scope. 
	window.helloSpeaker = helloSpeaker;

})(window);