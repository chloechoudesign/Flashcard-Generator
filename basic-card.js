module.exports = BasicCard;

var inquirer = require('inquirer');

function BasicCard(front, back){
  this.front = front;
  this.back = back;

  this.printFront = function(){
    console.log(this.front);
  }

  this.printBack = function(){
    console.log(this.back);
  }
};

var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");

firstPresident.printFront();
firstPresident.printBack();


//Create Questions with inquirer
inquirer.prompt([
  {
    name: 'front',
    message: 'Question: '
  }, {
    name: 'back',
    message: 'Answer: '
  },
]).then(function(answers){

  var newQuestion = new BasicCard (answers.front, answers.back);

  // console.log(newQuestion);

  newQuestion.printFront();
  newQuestion.printBack();
})