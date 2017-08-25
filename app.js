var BasicCard = require('./basicCard');
var ClozeCard = require('./clozeCard');

console.log("\/\/\/\/\/\/\ Basic Card /\/\/\/\/\/\/");

var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
console.log("Front : "+firstPresident.front); 

// "George Washington"
console.log("Back : " +firstPresident.back); 

console.log("\/\/\/\/\/\/\ Cloze Card /\/\/\/\/\/\/");

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log("Cloze Card : "+firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
console.log("Partial Card : "+firstPresidentCloze.partial); 

// "George Washington was the first president of the United States.
console.log("Full Card : "+firstPresidentCloze.fullText);

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");