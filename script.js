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
  let allPreviousCharArr = []
  //new game button/reset
  const allSquares = document.querySelectorAll('div.square')
  
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

      const allDivs = ['#two','#three','#four', '#five','#six','#seven','#eight','#nine','#ten','#eleven','#twelve','#thriteen','#fourteen','#fifteen','#sixteen','#seventeen','#eighteen','#nineteen','#twenty','#twenty-one','#twenty-two','#twenty-three','#twenty-four']
    const innerDivs = ['#seven','#eight','#nine','#twelve','#thirteen','#fourteen','#seventeen','#eighteen','#nineteen']

      let randomSetting = function(){return Math.floor(Math.random() * allDivs.length)}
      let index = randomSetting()
      let bombPos = document.querySelector(allDivs[index])
      bombPos.appendChild(bomb)
      allDivs.splice(index,1)
      console.log(index)

      // function randomSqaures(){
      //   const arr = []
      //   while(allDivs.length < 6){
      //     let randomNum = Math.floor(Math.random() * allDivs.length) + 1
      //     if(arr.indexOf(randomNum) === -1){
      //       arr.push(randomNum)
      //       if(arr.length <= 2){
      //         let bombPos = document.querySelector(allDivs[randomNum])
      //         bombPos.appendChild(bomb)
      //       }
      //       if(arr.length <= 4){
      //             let questionMarkPos = document.querySelector(allDivs[randomNum])
      //             questionMarkPos.appendChild(questionMark)
      //       }else{
      //         let starPos = document.querySelector(allDivs[randomNum])
      //         starPos.appendChild(star)
      //       }
      //     }
        
      // return(arr)
      // }
      // randomSqaures()
      
   

      let randomSetting2 = Math.floor(Math.random() * allDivs.length)
      let bombPos2 = document.querySelector(allDivs[randomSetting2])
      bombPos2.appendChild(bomb)
      allDivs.splice(randomSetting2,1)
      let questionMarkPos = document.querySelector(allDivs[randomSetting2])
      questionMarkPos.appendChild(questionMark)

      

   }
   start()




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
  if(!executed2){  
    executed2 = true
    let char = document.createElement("img")
    char.src = "char.png";
    squareTwo.appendChild(char)
    previousCharArr[0].removeChild(previousCharArr[0].firstChild)
    previousCharArr[0].style.backgroundColor = 'grey';
    previousCharArr.length = 0
    previousCharArr.push(squareTwo)
    allPreviousCharArr.push(squareTwo)
    
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
    allPreviousCharArr.push(squareThree)
  }
  console.log("click")
})

newGameButton.addEventListener("click",function(){
  for(let i = 0; i < previousCharArr[0].length; i ++){
  previousCharArr[i].style.backgroundColor = 'white';
  console.log(previousCharArr)
  }
  previousCharArr[0].removeChild(previousCharArr[0].firstChild)
  let char = document.createElement("img")
  char.src = "char.png";
  squareOne.appendChild(char)
  // previousCharArr.length = 0
  previousCharArr.push(squareOne)
  allPreviousCharArr.push(squareOne)
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


