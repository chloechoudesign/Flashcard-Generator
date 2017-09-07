module.exports = ClozeCard;

function ClozeCard(text, cloze){
 this.cloze = cloze;
 this.text = text;

 this.printCloze = function(){
    console.log(this.cloze);
 }

 this.printText = function(){
    console.log(this.text);
 }

 this.printPartial = function(){
    var fullText = this.text;
    var partial = fullText.replace(this.cloze, '...');
    // console.log(this.cloze);
    // console.log(this.text);
    console.log(partial);
 }
}

var firstPresidentCloze = new ClozeCard(
  "George Washington was the first president of the United States.",
  "George Washington");

// console.log(firstPresidentCloze.cloze);
// console.log(firstPresidentCloze.text);
// console.log(firstPresidentCloze.printPartial());

firstPresidentCloze.printCloze();
firstPresidentCloze.printText();
firstPresidentCloze.printPartial();





