var twitter = document.getElementById("twitter");
var fb = document.getElementById("fb");
var emailInput = document.getElementById("email-input");
var signBtn = document.getElementById("sign-up");

twitter.addEventListener("click", function() {
	window.location = "https://twitter.com/";
});


fb.addEventListener("click", function() {
	window.location = "https://www.facebook.com/";
});


signBtn.addEventListener("click", function() {
	document.getElementById("tooltip").classList.add("show-tooltip");
});

emailInput.addEventListener("click", function() {
	document.getElementById("tooltip").classList.remove("show-tooltip");
});