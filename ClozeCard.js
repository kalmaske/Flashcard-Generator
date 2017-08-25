
var ClozeCard = function (text, cloze) {
    if (!(this instanceof ClozeCard)) {
        return new ClozeCard(text, cloze);
    }

    
    var generator = cloze.replace(/[a-z0-9\s]/gi, '.');
    this.fullText = fullText;
    this.cloze = cloze;
    this.partial = fullText.replace(new RegExp(cloze, "gi"), generator);
    if (this.fullText.indexOf(this.cloze) === -1) {
        console.log(this.cloze + "is wrong , " + this.fullText +" is correct");
    }     
};

module.exports = ClozeCard;