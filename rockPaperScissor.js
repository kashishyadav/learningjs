const getUserChoice=userInput=>{
  userInput=userInput.toLowerCase();
  if(userInput==='rock' || userInput==='scissors' || userInput==='paper' || userInput==='bomb')
    {
      return userInput
    }
  else
    {
      console.log('error message not a valid choice!')
    }
}
//this is an arrow function as there is a single
//argument there is no need to put parenthesis
//getUserChoice('rock')
//function call by using a variable and passing required arguemnt in it
//arrow function
getComputerChoice= ()=>
{
  let choice=''
  let checkNum=Math.floor(Math.random()*2);
  //floor will round off decimal value so we will get choice only between 0 1 2
  switch(checkNum)
    {
      case 0:
        choice='rock'
        break;
      case 1:
        choice='paper'
        break;
      case 2:
        choice='scissors'
        break;
    }
  return choice
}
//console.log(getComputerChoice())
//check the value get by computer

determineWinner=function(userChoice,computerChoice){//anonymous function
  if(userChoice===computerChoice)
   {  
     return 'The game is a tie!'
   }
  else if(userChoice==='bomb')
    {
       return 'user won'
     }
  else{
    if(userChoice==='rock')
      {
        if(computerChoice==='scissors')
          {
            return 'user won'
          }
        else if(computerChoice==='paper')
          {
            return 'computer won'
          }
      }
     else if(userChoice==='paper')
      {
        if(computerChoice==='scissors')
          {
            return 'computer won'
          }
        else if(computerChoice==='rock')
          {
            return 'user won'
          }
      }
    else{
      if(computerChoice==='paper')
          {
            return 'user won'
          }
        else if(computerChoice==='rock')
          {
            return 'computer won'
          }
    }
  }
}
function playGame()//normal function
{
  let userChoice=getUserChoice('bomb')
 let computerChoice=getComputerChoice()
  console.log(userChoice)
  console.log(computerChoice)
  console.log(determineWinner(userChoice,computerChoice))
  
 
}
playGame()
