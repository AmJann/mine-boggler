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

  let executed = false;
  let squareOne = document.querySelector('#one')
  squareOne.addEventListener("click",function(){
    if(!executed){
      executed = true;
    let char = document.createElement("img")
    char.src = "char.png";
    squareOne.appendChild(char)
    previousCharArr.push(squareOne)}
    console.log(previousCharArr)
  })
let executed2 = false;
  let squareTwo = document.querySelector('#two')
  squareTwo.addEventListener("click",function(){
  if(!executed2){  
    executed2 = true
    let char = document.createElement("img")
    char.src = "char.png";
    squareTwo.appendChild(char)
    previousCharArr[0].removeChild(previousCharArr[0].firstChild)
    previousCharArr[0].style.backgroundColor = 'grey';
    previousCharArr.length = 0
    previousCharArr.push(squareTwo)
    
  }  
    console.log("click")
    console.log(previousCharArr)
  })

  let executed3 = false;
  let squareThree = document.querySelector('#three')
  squareThree.addEventListener("click",function(){
  if(!executed3){  
    executed3 = true
    let char = document.createElement("img")
    char.src = "char.png";
    squareThree.appendChild(char)
    previousCharArr[0].removeChild(previousCharArr[0].firstChild)
    previousCharArr[0].style.backgroundColor = 'grey';
    previousCharArr.length = 0;
    previousCharArr.push(squareThree)
    
  }
  console.log("click")
})

  // let $squares = $('.square')
  // $squares.append('<img src = "block.png">')


//   console.log(boardArr)
// const allSquares = document.querySelectorAll('.square')

// allSquares.addEventlistener('click',function(){
//     square.className = "#"
// })



