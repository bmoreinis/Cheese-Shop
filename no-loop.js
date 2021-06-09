/* Simple Cheese Shop by Mr. M. */
var cheeseType = prompt("What cheese would you like?");
if (cheeseType == "cheddar") {
  alert("We don't get much call for that in these parts, sir.");
}
else if (cheeseType == "but it's the most popular cheese in the world!") {
  alert("Not in these parts, sir.");
}
else if (cheeseType == "camembert") {
  alert("It's, ah, it's a bit runny, sir.");
}
else if (cheeseType == "anyway") {
  alert("It's a bit more runny than you'd like, sir.");
}
else if (cheeseType == "I don't care") {
  alert("Oh, look, the cat's eaten it!");
}
else if (cheeseType == "red leicester") {
  alert("I'm afraid we're fresh out of red Leicester, sir.");
}
else if (cheeseType == "bang") {
  alert("What a terrible waste of human life!");
}
else {
  alert("We don't have any " + cheeseType + " sir. Sorry!");
}
var again = confirm("That wasn't very funny, was it?");