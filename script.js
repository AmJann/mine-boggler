/* 
[x]add reset button
[]create .pngs for classes
  [x]bomb
  [x]star
  [x]question mark
  [x]block
  []start
  []end
  []character
  []character at start
  []character at end
[] create classes with styling for character, character-start, 
character-end, block, bomb, star, and question mark.
    []character class 
    []
    []character-start
    []character-end
    []block
    []bomb
    []star
    []question mark
[]create logic for movement
  [] add event listeners to divs 
  []  query selector all 
  [x] use a loop within a loop to create 2d array 
  [] use rows and column logic (take time to figure this out)
  [] assign 
 []append images to divs
 []
 */
//writing hardcoding the array I needed helped me figure out how to create using for loops
//   let boardArrEx=[
//                 [0,0][0,1][0,2][0,3][0,4]
//                 [1,0][1,1][1,2][1,3][1,4]
//                 [2,0][2,1][2,2][2,3][2,4]
//                 [3,0][3,1][3,2][3,3][3,4]
//                 [4,0][4,1][4,2][4,3][4,4]
// ]
let charPos = 0;
let boardArr = [];
let currentSpace = 1;
const allDivs = [
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
  "#thriteen",
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
console.log(boardArr);
// function moveChar(square){
//   let char = document.createElement("img")
//   char.src = "char.png";
//   square.appendChild(char)
// }
let previousCharArr = [];
let allPreviousCharArr = [];
//new game button/reset
const allSquares = document.querySelectorAll(".square");
console.log(allSquares[0].id);
const newGameButton = document.querySelector("#new");

function start() {
  let bomb = document.createElement("img");
  bomb.src = "boom.png";
  let bomb2 = document.createElement("img");
  bomb2.src = "boom2.png";
  let questionMark = document.createElement("img");
  questionMark.src = "questionMark.png";
  let star = document.createElement("img");
  star.src = "star.png";

  let randomSetting = function () {
    return Math.floor(Math.random() * allDivs.length);
  };
  let index = randomSetting();
  let bombPos = document.querySelector(allDivs[index]);
  bombPos.appendChild(bomb);
  bombPos.classList.add("bomb");
  // allDivs.splice(index,1)
  console.log(index);
  console.log(bombPos);

  // let randomSetting2 = Math.floor(Math.random() * allDivs.length)
  // let bombPos2 = document.querySelector(allDivs[randomSetting2])
  // bombPos2.appendChild(bomb)
  // allDivs.splice(randomSetting2,1)
  // let questionMarkPos = document.querySelector(allDivs[randomSetting2])
  // questionMarkPos.appendChild(questionMark)
}
start();

function changeImg(element) {
  if (element.classList.contains("bomb")) {
    element.firstChild.src = "char.png";
  } else {
    let char = document.createElement("img");
    char.src = "char.png";
    element.appendChild(char);
  }
  previousCharArr[0].removeChild(previousCharArr[0].firstChild);
  previousCharArr[0].style.backgroundColor = "grey";
  previousCharArr.length = 0;
  previousCharArr.push(element);
  allPreviousCharArr.push(element);
  console.log(previousCharArr);
}

let executed = false;

let squareOne = document.querySelector("#one");
squareOne.addEventListener("click", function () {
  if (!executed) {
    executed = true;
    let char = document.createElement("img");
    char.src = "char.png";
    squareOne.appendChild(char);
    previousCharArr.push(squareOne);
    allPreviousCharArr.push(squareOne);
  }
  console.log(previousCharArr);
});

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
   changeImg(this)
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
   changeImg(this)
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
    changeImg(this)
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
    changeImg(this)
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
   changeImg(this)
  }
});

let executed7 = false;
let squareSeven = document.querySelector("#seven");
squareSeven.addEventListener("click", function () {
  if (
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
   changeImg(this)
  }
});

let executed8 = false;
let squareEight = document.querySelector("#eight");
squareEight.addEventListener("click", function () {
  if (
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
   changeImg(this)
  }
});

let executed9 = false;
let squareNine = document.querySelector("#nine");
squareNine.addEventListener("click", function () {
  if (
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
   changeImg(this)
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
    changeImg(this)
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
    
  changeImg(this)

  }
});
// square 12
let executed12 = false;
let squareTwelve = document.querySelector("#twelve");
squareTwelve.addEventListener("click", function () {
  if (
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
    changeImg(this)
  }
});

//square 13
let executed13 = false;
let squareThirteen = document.querySelector("#thirteen");
squareThirteen.addEventListener("click", function () {
  if (
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
    changeImg(this)
  }
});

//Square 14
let executed14 = false;
let squareFourteen = document.querySelector("#fourteen");
squareFourteen.addEventListener("click", function () {
  if (
    (!executed14 && currentSpace === 8) ||
    currentSpace === 9 ||
    currentSpace === 10 ||
    currentSpace === 13 ||
    currentSpace === 15 ||
    currentSpace === 18 ||
    currentSpace === 19 ||
    currentSpace === 20
  ) {
    changeImg(this)
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
    changeImg(this)
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
    executed16 = true;
    currentSpace = 16;
   changeImg(this)
  }
});

//Square 17
let executed17 = false;
let squareSeventeen = document.querySelector("#seventeen");
squareSeventeen.addEventListener("click", function () {
  if (
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
    changeImg(this)
  }
});

//Square 18
let executed18 = false;
let squareEighteen = document.querySelector("#eighteen");
squareEighteen.addEventListener("click", function () {
  if (
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
    changeImg(this)
  }
});

//Square 19
let executed19 = false;
let squareNineteen = document.querySelector("#nineteen");
squareNineteen.addEventListener("click", function () {
  if (
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
    changeImg(this)
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
    changeImg(this)
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
    changeImg(this)
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
    changeImg(this)
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
    changeImg(this)
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
    changeImg(this)
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
    changeImg(this)
  }
});

//New Game Button/ Reset Board
newGameButton.addEventListener("click", function () {
  for (let i = 0; i < allPreviousCharArr.length; i++) {
    allPreviousCharArr[i].style.backgroundColor = "white";
  }
  previousCharArr[0].removeChild(previousCharArr[0].lastChild);
  let char = document.createElement("img");
  char.src = "char.png";
  squareOne.appendChild(char);
  previousCharArr.length = 0;
  previousCharArr.push(squareOne);
  allPreviousCharArr.push(squareOne);



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

  currentSpace = 1;
  start();
  // for (let i = 0; i <= 25; i++) {
  //   if (allSquares[i].classList.contains("bomb")) {
  //     allSquares[i].classList.remove("bomb");
  //     console.log(allSquares[i].classList)
  //   }
  // }

  // for( let i =0; i < allSquares.length; i++){
  //   allSquares.removeChild(squareVars[i].lastElementChild)
  // }
  
  console.log("click");
  console.log(previousCharArr);
});

// let $squares = $('.square')
// $squares.append('<img src = "block.png">')

//   console.log(boardArr)
// const allSquares = document.querySelectorAll('.square')

// allSquares.addEventlistener('click',function(){
//     square.className = "#"
// })
// adds or removes the active class
// cell.classList.toggle("active"); (from stakcoverflow)
