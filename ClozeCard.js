function ClozeCard(text, cloze) {
    var generator = cloze.replace(/[a-z0-9\s]/gi,".");
    this.cloze = cloze;
    this.fullText = fullText;
    this.partial = text.replace(new regExp(cloze,"gi"),generator);

    if (this.fullText.indexOf(this.cloze) === -1){
        console.log(this.cloze + "is wrong , " + this.fullText +" is correct" );
    }
};

function ClozeCardPrototype() {

  											
};

ClozeCard.prototype = new ClozeCardPrototype();

module.exports = ClozeCard; 