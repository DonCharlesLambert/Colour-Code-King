squares = document.getElementsByClassName("square")
round = Math.round
random = Math.random
color = "nothing man hollup"

function startGame(){
  setSquareColors()
  setSquareOnClick()
}

function setSquareOnClick(){
  for(let i = 0; i < squares.length; i++){
    squares[i].onclick = function(){
      if(squares[i].style.backgroundColor == color){
        startGame()
      }else{
        alert("Incorrect, the colour of this square is " + squares[i].style.backgroundColor)
      }  
    }
  }
}

function setSquareColors(){
  correctSquare = round(random() * (squares.length - 1))
  console.log(correctSquare)
  message = document.getElementById("message")
  color = getRandomColor()
  message.innerHTML = color

  for(let i = 0; i < squares.length; i++){
    if (i == correctSquare){
      squares[i].style.backgroundColor = color
    }else{
      squares[i].style.backgroundColor = getRandomColor()
    }  
  }
}

function getRandomColor(){
  red   = getRandom255()
  green = getRandom255()
  blue  = getRandom255()
  return 'rgb(' + red + ', ' + green + ', ' + blue +')'
}

function getRandom255(){
  return round(random() * 255).toString(10)
}