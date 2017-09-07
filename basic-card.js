module.exports = BasicCard;

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