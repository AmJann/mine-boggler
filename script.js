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
let boardArr = []
let currentSpace = 1;
const allDivs = ['#two','#three','#four', '#five','#six','#seven','#eight','#nine','#ten','#eleven','#twelve','#thriteen','#fourteen','#fifteen','#sixteen','#seventeen','#eighteen','#nineteen','#twenty','#twenty-one','#twenty-two','#twenty-three','#twenty-four']
const innerDivs = ['#seven','#eight','#nine','#twelve','#thirteen','#fourteen','#seventeen','#eighteen','#nineteen']
const squareVars = ['squareOne','squareTwo','squareThree','squareFour','squareFive','squareSix','squareSeven', 'squareEight','squareNine','squareTen','squareEleven','squareTwelve','squareThirteen','squareFourteen','squareFifteen','squareSixteen','squareSeventeen','squareEighteen','squareNineteen','squareTwenty','squareTwentyOne','squareTwentyTwo','squareTwentyThree','squareTwentyFour','squareTwentyFive']
  for(let i = 0; i < 5; i ++){
   for(let j = 0; j < 5; j ++){
      boardArr.push([i,j])
   }
  }
  console.log(boardArr)
  // function moveChar(square){
  //   let char = document.createElement("img")
  //   char.src = "char.png";
  //   square.appendChild(char)
  // }
  let previousCharArr = []
  let allPreviousCharArr = []
  //new game button/reset
  const allSquares = document.querySelectorAll('div.square')
  console.log(allSquares[0].id)
   const newGameButton = document.querySelector('#new')
    
    
    function start(){
      let bomb = document.createElement("img")
      bomb.src = "boom.png"
      let bomb2 = document.createElement("img")
      bomb2.src = "boom2.png"
      let questionMark = document.createElement("img")
      questionMark.src = "questionMark.png"
      let star = document.createElement("img")
      star.src = "star.png"

     

      let randomSetting = function(){return Math.floor(Math.random() * allDivs.length)}
      let index = randomSetting()
      let bombPos = document.querySelector(allDivs[index])
      bombPos.appendChild(bomb)
      bombPos.classList.add("bomb")
      allDivs.splice(index,1)
      console.log(index)
      console.log(bombPos)
    
 
      
      
   

      // let randomSetting2 = Math.floor(Math.random() * allDivs.length)
      // let bombPos2 = document.querySelector(allDivs[randomSetting2])
      // bombPos2.appendChild(bomb)
      // allDivs.splice(randomSetting2,1)
      // let questionMarkPos = document.querySelector(allDivs[randomSetting2])
      // questionMarkPos.appendChild(questionMark)

      

   }
   start()

  //  function changeImg(){
  //   if(this.classList.contains("bomb")){
  //     this.firstChild.src = "char.png"
      
  //   }else{
  //   let char = document.createElement("img")
  //   char.src = "char.png";
  //   this.appendChild(char)}
  //   previousCharArr[0].removeChild(previousCharArr[0].firstChild)
  //   previousCharArr[0].style.backgroundColor = 'grey';
  //   previousCharArr.length = 0;
  //   previousCharArr.push(this)
  //   allPreviousCharArr.push(this)
  //   console.log(previousCharArr)
  // }
   


  let executed = false;
  
  let squareOne = document.querySelector('#one')
  squareOne.addEventListener("click",function(){
    if(!executed){
      executed = true;
    let char = document.createElement("img")
    char.src = "char.png";
    squareOne.appendChild(char)
    previousCharArr.push(squareOne)
    allPreviousCharArr.push(squareOne)
  }
    console.log(previousCharArr)
  })

let executed2 = false;
  let squareTwo = document.querySelector('#two')
  squareTwo.addEventListener("click",function(){
  if(!executed2 && currentSpace === 1 || currentSpace === 3 || currentSpace === 6 || currentSpace === 7 || currentSpace === 8){  
    currentSpace = 2
    executed2 = true
    if(this.classList.contains("bomb")){
      this.firstChild.src = "char.png"
    }else{
    let char = document.createElement("img")
    char.src = "char.png";
    squareTwo.appendChild(char)
    }
    previousCharArr[0].removeChild(previousCharArr[0].firstChild)
    previousCharArr[0].style.backgroundColor = 'grey';
    previousCharArr.length = 0
    previousCharArr.push(squareTwo)
    allPreviousCharArr.push(squareTwo)
    
  }

  })

  let executed3 = false;
  let squareThree = document.querySelector('#three')
  squareThree.addEventListener("click",function(){
  if(!executed3 && currentSpace === 2 || currentSpace === 4 || currentSpace === 7 || currentSpace === 8 || currentSpace === 9){  
    executed3 = true
    currentSpace = 3;
    if(this.classList.contains("bomb")){
      this.firstChild.src = "char.png"
    }else{
    let char = document.createElement("img")
    char.src = "char.png";
    squareThree.appendChild(char)
    }
    previousCharArr[0].removeChild(previousCharArr[0].firstChild)
    previousCharArr[0].style.backgroundColor = 'grey';
    previousCharArr.length = 0;
    previousCharArr.push(squareThree)
    allPreviousCharArr.push(squareThree)
  }

})

let executed4 = false;
let squareFour = document.querySelector('#four')
squareFour.addEventListener("click",function(){
if(!executed4 && currentSpace === 3 || currentSpace === 5 || currentSpace === 8 || currentSpace === 9 || currentSpace === 10){  
  executed4 = true
  currentSpace =4;
  if(this.classList.contains("bomb")){
    this.firstChild.src = "char.png"
  }else{
  let char = document.createElement("img")
  char.src = "char.png";
  squareFour.appendChild(char)
  }
  previousCharArr[0].removeChild(previousCharArr[0].firstChild)
  previousCharArr[0].style.backgroundColor = 'grey';
  previousCharArr.length = 0;
  previousCharArr.push(squareFour)
  allPreviousCharArr.push(squareFour)
}

})

let executed5 = false;
let squareFive = document.querySelector('#five')
squareFive.addEventListener("click",function(){
if(!executed5 && currentSpace === 4 || currentSpace === 9 || currentSpace === 10){  
  executed5 = true
  currentSpace = 5;
  if(this.classList.contains("bomb")){
    this.firstChild.src = "char.png"
    console.log(squareFive)
  }else{
  let char = document.createElement("img")
  char.src = "char.png";
  squareFive.appendChild(char)}
  previousCharArr[0].removeChild(previousCharArr[0].firstChild)
  previousCharArr[0].style.backgroundColor = 'grey';
  previousCharArr.length = 0;
  previousCharArr.push(squareFive)
  allPreviousCharArr.push(squareFive)
}
})

let executed6 = false;
let squareSix = document.querySelector('#six')
squareSix.addEventListener("click",function(){
if(!executed6 && currentSpace === 1 || currentSpace === 2 || currentSpace === 7 || currentSpace === 11 || currentSpace === 12 ){  
  executed6 = true
  currentSpace = 6;
  if(this.classList.contains("bomb")){
    this.firstChild.src = "char.png"
  }else{
  let char = document.createElement("img")
  char.src = "char.png";
  squareSix.appendChild(char)}
  previousCharArr[0].removeChild(previousCharArr[0].firstChild)
  previousCharArr[0].style.backgroundColor = 'grey';
  previousCharArr.length = 0;
  previousCharArr.push(squareSix)
  allPreviousCharArr.push(squareSix)
}
})

let executed7 = false;
let squareSeven = document.querySelector('#seven')
squareSeven.addEventListener("click",function(){
if(!executed7 && currentSpace === 1 || currentSpace === 2 || currentSpace === 3 || currentSpace === 6 || currentSpace === 8 || currentSpace === 11 || currentSpace === 12 || currentSpace === 13 ){  
  executed7 = true
  currentSpace = 7;
  if(this.classList.contains("bomb")){
    this.firstChild.src = "char.png"
    
  }else{
  let char = document.createElement("img")
  char.src = "char.png";
  this.appendChild(char)}
  previousCharArr[0].removeChild(previousCharArr[0].firstChild)
  previousCharArr[0].style.backgroundColor = 'grey';
  previousCharArr.length = 0;
  previousCharArr.push(this)
  allPreviousCharArr.push(this)
  console.log(previousCharArr)
}
})

let executed8 = false;
let squareEight = document.querySelector('#eight')
squareEight.addEventListener("click",function(){
if(!executed8 && currentSpace === 2 || currentSpace === 3 || currentSpace === 4 || currentSpace === 7 || currentSpace === 9 || currentSpace === 12 || currentSpace === 13 || currentSpace === 14 ){  
  executed8 = true
  currentSpace = 8;
  if(this.classList.contains("bomb")){
    this.firstChild.src = "char.png"
    
  }else{
  let char = document.createElement("img")
  char.src = "char.png";
  this.appendChild(char)}
  previousCharArr[0].removeChild(previousCharArr[0].firstChild)
  previousCharArr[0].style.backgroundColor = 'grey';
  previousCharArr.length = 0;
  previousCharArr.push(this)
  allPreviousCharArr.push(this)
}
})

let executed9 = false;
let squareNine = document.querySelector('#nine')
squareNine.addEventListener("click",function(){
if(!executed9 && currentSpace === 3 || currentSpace === 4 || currentSpace === 5 || currentSpace === 8 || currentSpace === 10 || currentSpace === 13 || currentSpace === 14 || currentSpace === 15 ){  
  executed9 = true
  currentSpace = 9;
  if(this.classList.contains("bomb")){
    this.firstChild.src = "char.png"
    
  }else{
  let char = document.createElement("img")
  char.src = "char.png";
  this.appendChild(char)}
  previousCharArr[0].removeChild(previousCharArr[0].firstChild)
  previousCharArr[0].style.backgroundColor = 'grey';
  previousCharArr.length = 0;
  previousCharArr.push(this)
  allPreviousCharArr.push(this)
  console.log(previousCharArr)
}
})

let executed10 = false;
let squareTen = document.querySelector('#ten')
squareTen.addEventListener("click",function(){
if(!executed10 && currentSpace === 4 || currentSpace === 5 || currentSpace === 3 || currentSpace === 9 || currentSpace === 14 || currentSpace === 15 ){  
  executed10 = true
  currentSpace = 10;
  if(this.classList.contains("bomb")){
    this.firstChild.src = "char.png"
    
  }else{
  let char = document.createElement("img")
  char.src = "char.png";
  this.appendChild(char)}
  previousCharArr[0].removeChild(previousCharArr[0].firstChild)
  previousCharArr[0].style.backgroundColor = 'grey';
  previousCharArr.length = 0;
  previousCharArr.push(this)
  allPreviousCharArr.push(this)
  console.log(previousCharArr)
}
})

newGameButton.addEventListener("click",function(){
  for(let i = 0; i < allPreviousCharArr.length; i ++){
  allPreviousCharArr[i].style.backgroundColor = "white";
  console.log(allPreviousCharArr)
  }
  previousCharArr[0].removeChild(previousCharArr[0].firstChild)
  let char = document.createElement("img")
  char.src = "char.png";
  squareOne.appendChild(char)
  previousCharArr.length = 0
  previousCharArr.push(squareOne)
  allPreviousCharArr.push(squareOne)

executed2 = false;
executed3 = false;
executed4 = false;
executed5 = false;
executed6 = false;
executed7 = false;
executed8 = false;
executed9 = false;
executed10 = false;
// for( let i =0; i < allSquares.length; i++){
//   allSquares.removeChild(squareVars[i].lastElementChild)
// }
start()
  console.log("click")
  console.log(previousCharArr)
})

  // let $squares = $('.square')
  // $squares.append('<img src = "block.png">')


//   console.log(boardArr)
// const allSquares = document.querySelectorAll('.square')

// allSquares.addEventlistener('click',function(){
//     square.className = "#"
// })
  // adds or removes the active class   
  // cell.classList.toggle("active"); (from stakcoverflow)


