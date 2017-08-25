var BasicCard = require('./basicCard');
var ClozeCard = require('./clozeCard');
var inquirer = require("inquirer");

//using prompt
var input = "";
var inputFront = "";
var inputBack = "";

function createCards(){
    inquirer.prompt([{
        input : 'list',
        message : 'Select a card :',
        name : 'card',
        choices : ["basic","cloze"]
    }
]).then (function(answer){
    switch (answer.card){
        case "basic":
            inquirer.prompt([{
                input : 'input',
                message : 'Typr front of card text:',
                name:'frontCard',
                validate : function(val){
                    if(val){return true;}
                    else{return 'Type front of card text: ';}
                }
            },
            {
                input : 'input',
                message : 'Typr front of card text:',
                name : 'backCard',
                validate : function(val){
                    if(val){return true;}
                    else{return 'Type back of card text: ';}
                }
            }
        ]).then(function(answer){
            switch(answer.card){
                case "basic":
                inquirer.prompt([{
                        input: 'input',
                        message: 'Front Card Text: ',
                        name: 'frontCard',
                        validate: function (val) {
                            if (val) {return true;}
                            else{return 'Type front of card text: ';}
                        }
                    },
                    {
                        input: 'input',
                        message: 'Back Card Text:  ',
                        name: 'backCard',
                        validate: function (val) {
                            if (val) {return true;}
                            else{return 'Type back of card text: ';}
                        }
                    }
                ]).then(function (answer) {
                    inputFront = answer.card;
                    inputBack = answer.card;
                    processBasic();
                });
                break;

                case "cloze":
                inquirer.prompt([{
                        input: 'input',
                        message: 'Type a full message: ',
                        name: 'clozeMessage',
                        validate: function (value) {
                            if (value) {return true;}
                            else{return 'Type a message';}
                        }
                    },
                    {
                        input: 'input',
                        message: 'Type a Cloze: ',
                        name: 'cloze',
                        validate: function (val) {
                            if (val) {
                                return true;
                            }
                            return 'Type a cloze: ';
                        }
                    }
                ]).then(function (answer) {
                    inputFront = answer.clozeMassage;
                    inputBack = answer.cloze;
                    processCloze();
                });
                break;
            default:
                console.log("wrong input!!")
                break;
            }
        });
    }

    function processBasic() {
        var frontandBack= new BasicCard(
            inputFront, inputBackCloze);
    
        console.log(" ------- Basic Card ------- ");
    
        // Front Card
        console.log("Front Card: " + frontandBack.front);
    
        // Back Card
        console.log("Back Card:  " + frontandBack.back);
        newCard();
    }

    function processCloze() {
        
            console.log(" ------- Cloze Card ------- ");
        
            var clozeCard = new ClozeCard(
                inputFront, inputBack);
        
            // "George Washington"
            console.log("Cloze:     " + clozeCard.cloze);
        
            // " ... was the first president of the United States.
            console.log("Partial:   " + clozeCard.partial);
        
            // "George Washington was the first president of the United States.
            console.log("Full Text: " + clozeCard.fullText);
            newCard();
        }
        function newCard() {
            
                inquirer.prompt([{
                        input: 'confirm',
                        message: 'Do you want to create Another Card?',
                        name: 'confirm',
                    }
                ]).then(function (answer) {
                    if (answer.confirm) {
                        createFlashCards();
                    }
                });
            };
            createCards();

})
}

