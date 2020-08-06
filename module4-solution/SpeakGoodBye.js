// Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
(function(){

	// Create an object, called 'byeSpeaker' to which you will attach
	// the "speak" method and which you will expose to the global context
	var byeSpeaker = {};

	var speakWord = "Good Bye";

	// Rewrite the 'speak' function such that it is attached to the
	// byeSpeaker object instead of being a standalone function.
	byeSpeaker.speak = function (name) {
		  console.log(speakWord + " " + name);
	}

	// Expose the 'byeSpeaker' object to the global scope.
	window.byeSpeaker = byeSpeaker;

})(window);