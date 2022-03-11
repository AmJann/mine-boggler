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
  [] use a loop within a loop to create 2d array 
  [] use rows and column logic (take time to figure this out)
  [] */
  //writing hardcoding the array I needed helped me figure out how to create using for loops
//   let boardArrEx=[
//                 [0,0][0,1][0,2][0,3][0,4]
//                 [1,0][1,1][1,2][1,3][1,4]
//                 [2,0][2,1][2,2][2,3][2,4]
//                 [3,0][3,1][3,2][3,3][3,4]
//                 [4,0][4,1][4,2][4,3][4,4]
// ]

let boardArr = []

  for(let i = 0; i < 5; i ++){
   for(let j = 0; j < 5; j ++){
      boardArr.push([i,j])
   }
  }
  console.log(boardArr)
//   console.log(boardArr)
// const allSquares = document.querySelectorAll('.square')

// allSquares.addEventlistener('click',function(){
//     square.className = "#"
// })



