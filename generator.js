// Code that generates the random lorem ipsum text

// Create a new object called loremIpsum by invoking the GenerateNewText constructor function
const loremIpsum = new GenerateNewText();

// Constructor function that creates an object with the sentences property
function GenerateNewText() {
  // Add property to the object
  this.sentences =
    [ "The Sunshine State",
      "ocean",
      "beach",
      "sea",
      "fish",
      "seagull",
      "alligator",
      "crocodile",
      "shark",
      "saltwater",
      "tubing",
      "boat",
      "sun",
      "gulf",
      "Tallahassee",
      "golf",
      "humidity",
      "hurricane",
      "bathing suit",
      "surfing",
      "jet ski",
      "river",
      "flamingo",
      "dolphin",
      "mosquito",
      "buzz buzz",
      "The Florida Keys",
      "Miami",
      "Orlando",
      "Walt Disney World",
      "Micky Mouse",
      "palm tree",
      "coconut",
      "sand",
      "shells",
      "yacht",
      "crazy",
      "zombie",
      "pelican",
      "bath salts",
      "fishing",
      "waterski",
      "skimboard",
      "surfboard",
      "tan",
      "sun-kissed",
      "sun screen",
      "sunburn",
      "sunglasses",
      "short shorts",
      "flip flops",
      "sandals",
      "party",
      "Florida Man",
      "Minnie",
      "paradise",
      "vacation",
      "beach chair",
      "sand castle",
      "pool",
      "condo",
      "party",
      "sunny",
      "South",
      "hot",
      "warm",
      "bugs",
      "sweat",
      "beer",
      "St.Augustine",
      "hurricane",
      "tropical storm",
      "manatee",
      "python",
      "lizard",
      "Cape Canaveral",
      "Everglades",
      "tourism",
      "retirement",
      "Universal Studios",
      "cruise",
      "orange",
      "seaport",
      "Jacksonville Jaguars",
      "orange blossom",
      "Northern Mockingbird",
      "panther",
      "sweaty",
      "humidity",
      "Disney",
      "rain"
   ];
}

// Method to the GenerateNewText constructor function that generates a random sentence
GenerateNewText.prototype.getRandomSentence = function() {
  let randomSentence = this.sentences[Math.floor(Math.random() * this.sentences.length)]
	return randomSentence;
}

// Method to the GenerateNewText constructor function that generates a paragraph from random sentences
GenerateNewText.prototype.getParagraph = function() {
  let paragraph = "";
  // Set the minimum number of words
  let minimumCharacterLength = 250;
  let firstSentence = true;
  while (paragraph.length < minimumCharacterLength) {
    if (firstSentence) {
      paragraph = paragraph.concat(this.getRandomSentence());
      firstSentence = false;
    } else {
      paragraph = paragraph.concat(" " + this.getRandomSentence());
    }
  }
  return paragraph;
}

// Method to the GenerateNewText constructor function that gerates multiple paragraphs from paragraphs
GenerateNewText.prototype.getAllParagraphs = function(numberOfParagraphs) {
  let allParagraphs = [];
  // Generate the number of paragraphs as specified by the user
  while (allParagraphs.length < numberOfParagraphs) {
    allParagraphs.push(this.getParagraph());
  }
  // Convert array into HTML string
  let paragraphHTML = "";
  allParagraphs.forEach(function (paragraph) {
    paragraphHTML += "<p>" + paragraph + "</p>";
  });
  return paragraphHTML;
}

module.exports = loremIpsum;
