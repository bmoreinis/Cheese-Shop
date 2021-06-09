/* Cheese Shop with Loop */

// Declare string variable cheeseType, set to null so that loop has an initial value.
var cheeseType = "null";
// Declare string variable inStock, set to whatever cheese you have today (like, "stilton")
var inStock = "stilton";
// Define while loop that runs while cheeseType is not equal to inStock value
while (cheeseType != inStock) {
  // Indent for block code
  // Prompt user for kind of cheese and store that in the cheeseType variable.
  cheeseType = prompt("What cheese would you like?");
  /* Add three conditionals that change based on cheeseType values: if / else if / else */
  // Ask for whatever whatever is inStock: "Here's your [cheeseType] cheese"
  if (cheeseType == inStock) alert("Here is your " + cheeseType + " cheese, sir.");
  // Don't have cheddar because "We don't get much call for that around here"
  else if (cheeseType == "cheddar") alert("We don't get much call for that around here.");
  // Last one, to all other requests: "Sorry, no."
  else alert("Sorry, no.");
  // Close While Loop Brackets
}
// End with the closing line of the skit.
alert("What a terrible waste of human life.");