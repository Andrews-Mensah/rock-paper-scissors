const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase()
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;} else {
      console.log ('Error! Type correct input')
    }
  } 
  
  let getComputerChoice = () => {
    randomNumber = Math.floor (Math.random() * 3)
  
    switch (randomNumber){
      case 0:
      return 'rock'
      break;
  
      case 1:
      return 'paper'
      break;
  
      case 2:
      return 'scissors'
      break;
  
      default:
      return 'bomb'
    }
  
  }
  
  const determineWinner = (userChoice,computerChoice) => {
  
    if (userChoice === 'bomb'){
      return 'User Won!'
    }
    if (userChoice === computerChoice){
      return 'The game was tie!'
    }
    if (userChoice === 'rock'){
      if (computerChoice === 'paper'){
        return 'Computer Won!'
      } else {
        return 'User Won!'
      }
    }
  
    if (userChoice === 'paper'){
      if (computerChoice === 'rock'){
        return 'User Won!'
      } else {
        return 'Computer Won!'
      }
    }
  
    if (userChoice === 'scissors'){
      if (computerChoice === 'rock'){
        return 'Computer Won!'
      } else {
        return 'User Won!'
      }
    }
  }
  
  const playGame = () => {
    const userChoice = getUserChoice('bomb')
    const computerChoice = getComputerChoice()
  console.log ('Your threw: ' + userChoice);console.log ('The computer threw : ' + computerChoice);
    
  console.log (determineWinner (userChoice, computerChoice))
  }
  
  playGame()