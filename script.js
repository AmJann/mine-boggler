
let finalScore = 0;
let score = 0;
let charPos = 0;
let boardArr = [];
let currentSpace = 1;
let previousCharArr = [];
let allPreviousCharArr = [];
const allSquares = document.querySelectorAll(".square");
let allDivs = [
  "#two",
  "#three",
  "#four",
  "#five",
  "#six",
  "#seven",
  "#eight",
  "#nine",
  "#ten",
  "#eleven",
  "#twelve",
  "#thirteen",
  "#fourteen",
  "#fifteen",
  "#sixteen",
  "#seventeen",
  "#eighteen",
  "#nineteen",
  "#twenty",
  "#twenty-one",
  "#twenty-two",
  "#twenty-three",
  "#twenty-four",
];
const innerDivs = [
  "#seven",
  "#eight",
  "#nine",
  "#twelve",
  "#thirteen",
  "#fourteen",
  "#seventeen",
  "#eighteen",
  "#nineteen",
];
const squareVars = [
  "squareOne",
  "squareTwo",
  "squareThree",
  "squareFour",
  "squareFive",
  "squareSix",
  "squareSeven",
  "squareEight",
  "squareNine",
  "squareTen",
  "squareEleven",
  "squareTwelve",
  "squareThirteen",
  "squareFourteen",
  "squareFifteen",
  "squareSixteen",
  "squareSeventeen",
  "squareEighteen",
  "squareNineteen",
  "squareTwenty",
  "squareTwenty-one",
  "squareTwenty-two",
  "squareTwenty-three",
  "squareTwenty-four",
  "squareTwenty-five",
];
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    boardArr.push([i, j]);
  }
}



let squareOne = document.querySelector("#one");
function shuffle(array) {
  var i = array.length,
    j = 0,
    temp;

  while (i--) {
    j = Math.floor(Math.random() * (i + 1));

    // This is the logic I was missing, I found this function on stack overflow
    //I already figured I needed a while loop because anything I looked up to generate
    //unique random numbers had a while loop(I guess this coud work in a for loop too) and I knew I needed Math.floor and Math.random
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
//new game button/reset
const newGameButton = document.querySelector("#new");
function start() {
  let char = document.createElement("img");
  char.src = "char.png";
  squareOne.appendChild(char);
  previousCharArr.length = 0;
  previousCharArr.push(squareOne);
  allPreviousCharArr.push(squareOne);

  let bomb = document.createElement("img");
  bomb.src = "boom.png";
  let bomb2 = document.createElement("img");
  bomb2.src = "boom2.png";
  let bomb3 = document.createElement("img");
  bomb3.src = "boom3.png";
  let bomb4 = document.createElement("img");
  bomb4.src = "boom4.png";
  let questionMark = document.createElement("img");
  questionMark.src = "questionMark.png";
  let questionMark2 = document.createElement("img");
  questionMark2.src = "questionMark2.png";
  let star = document.createElement("img");
  star.src = "star.png";
  let star2 = document.createElement("img");
  star2.src = "star2.png";
  let block = document.createElement("img");
  block.src = "block.png";
  let block2 = document.createElement("img");
  block2.src = "block2.png";
  let block3 = document.createElement("img");
  block3.src = "block3.png";
  let block4 = document.createElement("img");
  block4.src = "block4.png";

  //blocks placement
  let blockShuffle = shuffle(innerDivs);

  let blockPos = document.querySelector(blockShuffle[0]);
  blockPos.appendChild(block);
  blockPos.classList.add("block");
  
  allDivs = allDivs.filter(
    (div) =>
      div !== blockShuffle[0] &&
      div !== blockShuffle[1] &&
      div !== blockShuffle[2] &&
      div !== blockShuffle[3]
  );

  let blockPos2 = document.querySelector(blockShuffle[1]);
  blockPos2.appendChild(block2);
  blockPos2.classList.add("block");
  

  let blockPos3 = document.querySelector(blockShuffle[2]);
  blockPos3.appendChild(block3);
  blockPos3.classList.add("block");
  

  let blockPos4 = document.querySelector(blockShuffle[3]);
  blockPos4.appendChild(block4);
  blockPos4.classList.add("block");
  



  //shuffle for bombs, stars, and question marks
  let shuffled = shuffle(allDivs);


  //add bombs
  let bombPos = document.querySelector(shuffled[0]);
  bombPos.appendChild(bomb);
  bombPos.classList.add("bomb");
  let bombPos2 = document.querySelector(shuffled[1]);
  bombPos2.appendChild(bomb2);
  bombPos2.classList.add("bomb");
  let bombPos3 = document.querySelector(shuffled[2]);
  bombPos3.appendChild(bomb3);
  bombPos3.classList.add("bomb");
  let bombPos4 = document.querySelector(shuffled[3]);
  bombPos4.appendChild(bomb4);
  bombPos4.classList.add("bomb");

  //add question marks
  let questionMarkPos = document.querySelector(shuffled[4]);
  questionMarkPos.appendChild(questionMark);
  questionMarkPos.classList.add("questionMark");
  let questionMarkPos2 = document.querySelector(shuffled[5]);
  questionMarkPos2.appendChild(questionMark2);
  questionMarkPos2.classList.add("questionMark");

  //add stars
  let starPos = document.querySelector(shuffled[6]);
  starPos.appendChild(star);
  starPos.classList.add("star");
  let starPos2 = document.querySelector(shuffled[7]);
  starPos2.appendChild(star2);
  starPos2.classList.add("star");
}
start();

let scoreBoard = document.querySelector("#scoreBoard");
let questionMarkScore = [
  {
    scoreChange: -500,
    message:
      "You tripped and scraped your knee moving between squares you lose 500 points.",
  },
  { scoreChange: 1000, message: "You found 1000 points on the ground! " },
  {
    scoreChange: -1000,
    message: "A dog bites your score, takes a whopping chunk of 1000 points.",
  },
  {
    scoreChange: 500,
    message:
      "You give an old lady directions to the last square, she rewards you with 500 points for your kindness!",
  },
  {
    scoreChange: 200,
    message:
      "You were too busy clicking squares and forgot to buy lunch, oops! Money saved is money earned, you gained 200 points.",
  },
  {
    scoreChange: -200,
    message:
      "You were caught speeding through squares, cop pulls you over and gives you a 200 point ticket. you lose 200 points.",
  },
  {
    scoreChange: 2000,
    message:
      "You made it big as a square tour guide, you collect 2000 points for new business. Your knowledge has finally paid off!",
  },
  {
    scoreChange: -2000,
    message:
      "You donated 2000 points to the charity pigs without wings, your points will help a poor wingless pig fly!",
  },
  // {
  //   scoreChange: score += score,
  //   message:
  //     "You went to a casino after reading a fortune cookie that said you would have very goodluck, the cookie was right! You doubled your money playing roulette. Thanks cookie!",
  // },
  // {
  //   scoreChange: 0,
  //   message:
  //     "You were found guilty of a pen smuggling operation, the government seizes all of your points. Moral of the story... don't take other peoples pens.",
  // },
];

let char = document.createElement("img");
function changeImg(element) {
  if (
    element.classList.contains("bomb") ||
    element.classList.contains("questionMark") ||
    element.classList.contains("star")
  ) {
    let char = document.createElement("img");
    element.firstChild.src = "char.png";
    char.classList.add("char");
  } else {
    let char = document.createElement("img");
    char.src = "char.png";
    element.appendChild(char);
    char.classList.add("char");
  }

  previousCharArr[0].removeChild(previousCharArr[0].lastChild);
  previousCharArr[0].style.backgroundColor = "grey";
  previousCharArr.length = 0;
  previousCharArr.push(element);
  allPreviousCharArr.push(element);


  if (element.classList.contains("bomb")) {
    score -= 500;
    scoreBoard.innerHTML = `Score: ${score}`;
  } else if (element.classList.contains("star")) {
    score += 500;
    scoreBoard.innerHTML = `Score: ${score}`;
  } else if (element.classList.contains("questionMark")) {
    let randomQuestionIndex = shuffle(questionMarkScore);
    score = score + randomQuestionIndex[0].scoreChange;

    alert(randomQuestionIndex[0].message);
    scoreBoard.innerHTML = `Score: ${score}`;
  } 
   else {
    score += 200;
    scoreBoard.innerHTML = `Score: ${score}`;
}
}

let executed2 = false;
let squareTwo = document.querySelector("#two");
squareTwo.addEventListener("click", function () {
  if (
    (!executed2 && currentSpace === 1) ||
    currentSpace === 3 ||
    currentSpace === 6 ||
    currentSpace === 7 ||
    currentSpace === 8
  ) {
    currentSpace = 2;
    executed2 = true;
    changeImg(this);

  }
  if (
    executed3 === true &&
    executed6 === true &&
    executed7 === true &&
    executed8 === true
  ) {
    alert("Out of Moves, Game Over");
  }
});

let executed3 = false;
let squareThree = document.querySelector("#three");
squareThree.addEventListener("click", function () {
  if (
    (!executed3 && currentSpace === 2) ||
    currentSpace === 4 ||
    currentSpace === 7 ||
    currentSpace === 8 ||
    currentSpace === 9
  ) {
    executed3 = true;
    currentSpace = 3;
    changeImg(this);

  }


  if (
    executed2 === true &&
    executed4 === true &&
    executed9 === true &&
    executed7 === true &&
    executed8 === true
  ) {
    alert("Out of Moves, Game Over");
  }
});

let executed4 = false;
let squareFour = document.querySelector("#four");
squareFour.addEventListener("click", function () {
  if (
    (!executed4 && currentSpace === 3) ||
    currentSpace === 5 ||
    currentSpace === 8 ||
    currentSpace === 9 ||
    currentSpace === 10
  ) {
    executed4 = true;
    currentSpace = 4;
    changeImg(this);
  }
  if (
    executed3 === true &&
    executed5 === true &&
    executed8 === true &&
    executed9 === true &&
    executed10 === true
  ) {
    alert("Out of Moves, Game Over");
  }
 
});

let executed5 = false;
let squareFive = document.querySelector("#five");
squareFive.addEventListener("click", function () {
  if (
    (!executed5 && currentSpace === 4) ||
    currentSpace === 9 ||
    currentSpace === 10
  ) {
    executed5 = true;
    currentSpace = 5;
    changeImg(this);
  }
  if (executed4 === true && executed9 === true && executed10 === true) {
    alert("Out of Moves, Game Over");
  }
});

let executed6 = false;
let squareSix = document.querySelector("#six");
squareSix.addEventListener("click", function () {
  if (
    (!executed6 && currentSpace === 1) ||
    currentSpace === 2 ||
    currentSpace === 7 ||
    currentSpace === 11 ||
    currentSpace === 12
  ) {
    executed6 = true;
    currentSpace = 6;
    changeImg(this);
  }
  if (
    executed2 === true &&
    executed7 === true &&
    executed11 === true &&
    executed12 === true
  ) {
    alert("Out of Moves, Game Over");
  }
});

let executed7 = false;
let squareSeven = document.querySelector("#seven");
squareSeven.addEventListener("click", function () {
  if (this.classList.contains("block")) {
    executed7 === true;
  } else if (
    (!executed7 && currentSpace === 1) ||
    currentSpace === 2 ||
    currentSpace === 3 ||
    currentSpace === 6 ||
    currentSpace === 8 ||
    currentSpace === 11 ||
    currentSpace === 12 ||
    currentSpace === 13
  ) {
    executed7 = true;
    currentSpace = 7;
    changeImg(this);
  }
  if (
    executed2 === true &&
    executed3 === true &&
    executed6 === true &&
    executed8 === true &&
    executed11 === true &&
    executed12 === true &&
    executed13 === true
  ) {
    alert("Out of Moves, Game Over");
  }
});

let executed8 = false;
let squareEight = document.querySelector("#eight");
squareEight.addEventListener("click", function () {
  if (this.classList.contains("block")) {
    executed8 === true;
  } else if (
    (!executed8 && currentSpace === 2) ||
    currentSpace === 3 ||
    currentSpace === 4 ||
    currentSpace === 7 ||
    currentSpace === 9 ||
    currentSpace === 12 ||
    currentSpace === 13 ||
    currentSpace === 14
  ) {
    executed8 = true;
    currentSpace = 8;
    changeImg(this);
  }
  if (
    executed2 === true &&
    executed3 === true &&
    executed4 === true &&
    executed7 === true &&
    executed9 === true &&
    executed12 === true &&
    executed13 === true &&
    executed14 === true
  ) {
    alert("Out of Moves, Game Over");
  }
});

let executed9 = false;
let squareNine = document.querySelector("#nine");
squareNine.addEventListener("click", function () {
  if (this.classList.contains("block")) {
    executed9 = true;
  } else if (
    (!executed9 && currentSpace === 3) ||
    currentSpace === 4 ||
    currentSpace === 5 ||
    currentSpace === 8 ||
    currentSpace === 10 ||
    currentSpace === 13 ||
    currentSpace === 14 ||
    currentSpace === 15
  ) {
    executed9 = true;
    currentSpace = 9;
    changeImg(this);
  }
  if (
    executed3 === true &&
    executed4 === true &&
    executed5 === true &&
    executed8 === true &&
    executed10 === true &&
    executed13 === true &&
    executed14 === true &&
    executed15 === true
  ) {
    alert("Out of Moves, Game Over");
  }
});

let executed10 = false;
let squareTen = document.querySelector("#ten");
squareTen.addEventListener("click", function () {
  if (
    (!executed10 && currentSpace === 4) ||
    currentSpace === 5 ||
    currentSpace === 9 ||
    currentSpace === 14 ||
    currentSpace === 15
  ) {
    executed10 = true;
    currentSpace = 10;
    changeImg(this);
  }
  if (
    executed4 === true &&
    executed5 === true &&
    executed9 === true &&
    executed14 === true &&
    executed15 === true
  ) {
    alert("Out of Moves, Game Over");
  }
});

let executed11 = false;
let squareEleven = document.querySelector("#eleven");
squareEleven.addEventListener("click", function () {
  if (
    (!executed11 && currentSpace === 6) ||
    currentSpace === 7 ||
    currentSpace === 12 ||
    currentSpace === 16 ||
    currentSpace === 17
  ) {
    executed11 = true;
    currentSpace = 11;

    changeImg(this);
  }
  if (
    executed6 === true &&
    executed7 === true &&
    executed12 === true &&
    executed16 === true &&
    executed17 === true
  ) {
    alert("Out of Moves, Game Over");
  }
});
// square 12
let executed12 = false;
let squareTwelve = document.querySelector("#twelve");
squareTwelve.addEventListener("click", function () {
  if (this.classList.contains("block")) {
    executed12 = true;
  } else if (
    (!executed12 && currentSpace === 6) ||
    currentSpace === 7 ||
    currentSpace === 8 ||
    currentSpace === 11 ||
    currentSpace === 13 ||
    currentSpace === 16 ||
    currentSpace === 17 ||
    currentSpace === 18
  ) {
    executed12 = true;
    currentSpace = 12;
    changeImg(this);
  }
  if (
    executed6 === true &&
    executed7 === true &&
    executed8 === true &&
    executed11 === true &&
    executed13 === true &&
    executed16 === true &&
    executed17 === true &&
    executed18 === true
  ) {
    alert("Out of Moves, Game Over");
  }
});

//square 13
let executed13 = false;
let squareThirteen = document.querySelector("#thirteen");
squareThirteen.addEventListener("click", function () {
  if (this.classList.contains("block")) {
    executed13 = true;
  } else if (
    (!executed13 && currentSpace === 7) ||
    currentSpace === 8 ||
    currentSpace === 9 ||
    currentSpace === 12 ||
    currentSpace === 14 ||
    currentSpace === 17 ||
    currentSpace === 18 ||
    currentSpace === 19
  ) {
    executed13 = true;
    currentSpace = 13;
    changeImg(this);
  }
  if (
    executed7 === true &&
    executed8 === true &&
    executed9 === true &&
    executed12 === true &&
    executed14 === true &&
    executed17 === true &&
    executed18 === true &&
    executed19 === true
  ) {
    alert("Out of Moves, Game Over");
  }
});

//Square 14
let executed14 = false;
let squareFourteen = document.querySelector("#fourteen");
squareFourteen.addEventListener("click", function () {
  if (this.classList.contains("block")) {
    executed14 = true;
  } else if (
    (!executed14 && currentSpace === 8) ||
    currentSpace === 9 ||
    currentSpace === 10 ||
    currentSpace === 13 ||
    currentSpace === 15 ||
    currentSpace === 18 ||
    currentSpace === 19 ||
    currentSpace === 20
  ) {
    executed14 = true;
    currentSpace = 14;
    changeImg(this);
  }
  if (
    executed8 === true &&
    executed9 === true &&
    executed10 === true &&
    executed13 === true &&
    executed15 === true &&
    executed18 === true &&
    executed19 === true &&
    executed20 === true
  ) {
    alert("Out of Moves, Game Over");
  }
});

//square 15
let executed15 = false;
let squareFifteen = document.querySelector("#fifteen");
squareFifteen.addEventListener("click", function () {
  if (
    (!executed15 && currentSpace === 9) ||
    currentSpace === 10 ||
    currentSpace === 14 ||
    currentSpace === 19 ||
    currentSpace === 20
  ) {
    executed15 = true;
    currentSpace = 15;
    changeImg(this);
  }
  if (
    executed9 === true &&
    executed10 === true &&
    executed14 === true &&
    executed19 === true &&
    executed20 === true
  ) {
    alert("Out of Moves, Game Over");
  }
});

//Square 16
let executed16 = false;
let squareSixteen = document.querySelector("#sixteen");
squareSixteen.addEventListener("click", function () {
  if (
    (!executed16 && currentSpace === 11) ||
    currentSpace === 12 ||
    currentSpace === 17 ||
    currentSpace === 21 ||
    currentSpace === 22
  ) {
    changeImg(this);
    executed16 = true;
    currentSpace = 16;
  }
  if (
    executed11 === true &&
    executed12 === true &&
    executed17 === true &&
    executed21 === true &&
    executed22 === true
  ) {
    alert("Out of Moves, Game Over");
  }
});

//Square 17
let executed17 = false;
let squareSeventeen = document.querySelector("#seventeen");
squareSeventeen.addEventListener("click", function () {
  if (this.classList.contains("block")) {
    executed17 = true;
  } else if (
    (!executed17 && currentSpace === 11) ||
    currentSpace === 12 ||
    currentSpace === 13 ||
    currentSpace === 16 ||
    currentSpace === 18 ||
    currentSpace === 21 ||
    currentSpace === 22 ||
    currentSpace === 23
  ) {
    executed17 = true;
    currentSpace = 17;
    changeImg(this);
  }
  if (
    executed11 === true &&
    executed12 === true &&
    executed13 === true &&
    executed16 === true &&
    executed18 === true &&
    executed21 === true &&
    executed22 === true &&
    executed23 === true
  ) {
    alert("Out of Moves, Game Over");
  }
});

//Square 18
let executed18 = false;
let squareEighteen = document.querySelector("#eighteen");
squareEighteen.addEventListener("click", function () {
  if (this.classList.contains("block")) {
    executed18 = true;
  } else if (
    (!executed18 && currentSpace === 12) ||
    currentSpace === 13 ||
    currentSpace === 14 ||
    currentSpace === 17 ||
    currentSpace === 19 ||
    currentSpace === 22 ||
    currentSpace === 23 ||
    currentSpace === 24
  ) {
    executed18 = true;
    currentSpace = 18;
    changeImg(this);
  }
  if (
    executed12 === true &&
    executed13 === true &&
    executed14 === true &&
    executed17 === true &&
    executed19 === true &&
    executed22 === true &&
    executed23 === true &&
    executed24 === true
  ) {
    alert("Out of Moves, Game Over");
  }
});

//Square 19
let executed19 = false;
let squareNineteen = document.querySelector("#nineteen");
squareNineteen.addEventListener("click", function () {
  if (this.classList.contains("block")) {
    executed19 = true;
  } else if (
    (!executed19 && currentSpace === 13) ||
    currentSpace === 14 ||
    currentSpace === 15 ||
    currentSpace === 18 ||
    currentSpace === 20 ||
    currentSpace === 23 ||
    currentSpace === 24
  ) {
    executed19 = true;
    currentSpace = 19;
    changeImg(this);
  }
  if (
    executed13 === true &&
    executed14 === true &&
    executed15 === true &&
    executed18 === true &&
    executed20 === true &&
    executed23 === true &&
    executed24 === true
  ) {
    alert("Out of Moves, Game Over");
  }
});

//Square 20
let executed20 = false;
let squareTwenty = document.querySelector("#twenty");
squareTwenty.addEventListener("click", function () {
  if (
    (!executed20 && currentSpace === 14) ||
    currentSpace === 15 ||
    currentSpace === 19 ||
    currentSpace === 24
  ) {
    executed20 = true;
    currentSpace = 20;
    changeImg(this);
  }
  if (
    executed14 === true &&
    executed15 === true &&
    executed19 === true &&
    executed24 === true
  ) {
    alert("Out of Moves, Game Over");
  }
});

//Square 21
let executed21 = false;
let squareTwentyOne = document.querySelector("#twenty-one");
squareTwentyOne.addEventListener("click", function () {
  if (
    (!executed21 && currentSpace === 16) ||
    currentSpace === 17 ||
    currentSpace === 22
  ) {
    executed21 = true;
    currentSpace = 21;
    changeImg(this);
  }
  if (executed16 === true && executed17 === true && executed22 === true) {
    alert("Out of Moves, Game Over");
  }
});

//Square 22
let executed22 = false;
let squareTwentyTwo = document.querySelector("#twenty-two");
squareTwentyTwo.addEventListener("click", function () {
  if (
    (!executed22 && currentSpace === 16) ||
    currentSpace === 17 ||
    currentSpace === 18 ||
    currentSpace === 21 ||
    currentSpace === 23
  ) {
    executed22 = true;
    currentSpace = 22;
    changeImg(this);
  }
  if (
    executed16 === true &&
    executed17 === true &&
    executed18 === true &&
    executed21 === true &&
    executed23 === true
  ) {
    alert("Out of Moves, Game Over");
  }
});

//Square 23
let executed23 = false;
let squareTwentyThree = document.querySelector("#twenty-three");
squareTwentyThree.addEventListener("click", function () {
  if (
    (!executed23 && currentSpace === 17) ||
    currentSpace === 18 ||
    currentSpace === 19 ||
    currentSpace === 22 ||
    currentSpace === 24
  ) {
    executed23 = true;
    currentSpace = 23;
    changeImg(this);
  }
  if (
    executed17 === true &&
    executed18 === true &&
    executed19 === true &&
    executed22 === true &&
    executed24 === true
  ) {
    alert("Out of Moves, Game Over");
  }
});

//Square 24
let executed24 = false;
let squareTwentyFour = document.querySelector("#twenty-four");
squareTwentyFour.addEventListener("click", function () {
  if (
    (!executed24 && currentSpace === 18) ||
    currentSpace === 19 ||
    currentSpace === 20 ||
    currentSpace === 23
  ) {
    executed24 = true;
    currentSpace = 24;
    changeImg(this);
  }
  if (
    executed18 === true &&
    executed19 === true &&
    executed20 === true &&
    executed23 === true
  ) {
    alert("Out of Moves, Game Over");
  }
});

//Square 25
let executed25 = false;
let squareTwentyFive = document.querySelector("#twenty-five");
squareTwentyFive.addEventListener("click", function () {
  if (
    (!executed25 && currentSpace === 19) ||
    currentSpace === 20 ||
    currentSpace === 24
  ) {
    executed25 = true;
    currentSpace = 25;
    changeImg(this);
  let highscoreArr = [] 
let highscore = -10000;
  let highscoreQuery = document.querySelector("#highscore")
   if(score > highscore){
      highscoreArr.push(score)
     highscore = highscoreArr[0]
     highscoreQuery.innerText = `Highscore: ${highscore}`;
    


   }

    alert(`You've reached the end!`);
  
  }
});
if (squareSeven.classList.contains("block")) {
  executed7 = true;
}
if (squareEight.classList.contains("block")) {
  executed8 = true;
}
if (squareNine.classList.contains("block")) {
  executed9 = true;
}
if (squareTwelve.classList.contains("block")) {
  executed12 = true;
}
if (squareThirteen.classList.contains("block")) {
  executed13 = true;
}
if (squareFourteen.classList.contains("block")) {
  executed14 = true;
}
if (squareSeventeen.classList.contains("block")) {
  executed17 = true;
}
if (squareEighteen.classList.contains("block")) {
  executed18 = true;
}
if (squareNineteen.classList.contains("block")) {
  executed19 = true;
}


//New Game Button/ Reset Board
newGameButton.addEventListener("click", function () {
  //change squares background color back to white
  for (let i = 0; i < allPreviousCharArr.length; i++) {
    allPreviousCharArr[i].style.backgroundColor = "white";
  }
  //resets all sqaures except start and end
  for (let i = 0; i < allSquares.length; i++) {
    if (!allSquares[i].classList.contains("startEnd"))
      allSquares[i].innerHTML = "";
  }
// resets start or end if character picture in square
  if (
    previousCharArr[0] === squareTwentyFive ||
    previousCharArr[0] === squareOne
  )
    previousCharArr[0].removeChild(previousCharArr[0].lastChild);


//removes class lists for bomb, star, and question mark
  for (let i = 0; i < allSquares.length; i++) {
    if (
      allSquares[i].classList.contains("bomb") ||
      allSquares[i].classList.contains("star") ||
      allSquares[i].classList.contains("questionMark") ||
      allSquares[i].classList.contains("char") ||
      allSquares[i].classList.contains("block")
    ) {
      allSquares[i].classList.remove("bomb");
      allSquares[i].classList.remove("star");
      allSquares[i].classList.remove("questionMark");
      allSquares[i].classList.remove("char");
      allSquares[i].classList.remove("block");

    }
  }
  //resets current space and character can now move to all spaces
  currentSpace = 1;
  score = 0;
  scoreBoard.innerHTML = `Score: ${score}`;

  executed2 = false;
  executed3 = false;
  executed4 = false;
  executed5 = false;
  executed6 = false;
  executed7 = false;
  executed8 = false;
  executed9 = false;
  executed10 = false;
  executed11 = false;
  executed12 = false;
  executed13 = false;
  executed14 = false;
  executed15 = false;
  executed16 = false;
  executed17 = false;
  executed18 = false;
  executed19 = false;
  executed20 = false;
  executed21 = false;
  executed22 = false;
  executed23 = false;
  executed24 = false;
  executed25 = false;
highscoreArr = 0;
  start();

});

//modal (help from modals classwork)
const openBtn = document.getElementById("openModal");
const modal = document.getElementById("modal");
const close = document.getElementById("close");

const openModal = () => {
  modal.style.display = "block";
};
openBtn.addEventListener("click", openModal);

const closeModal = () => {
  modal.style.display = "none";
};

close.addEventListener("click", closeModal);



