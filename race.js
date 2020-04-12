let raceNumber = Math.floor(Math.random() * 1000);
//In order to make this set of numbers range from 0 (inclusive) to 1000 (exclusive) we can multiply the returned value by 1000.
//Finally, to ensure we only have whole numbers from 0 to 999 we can round down using Math.floor().
const userRegistered = false;
const runnerAge=16
if(runnerAge>18 && userRegistered==true)
  {
    raceNumber+=100
  }
if(runnerAge>18 && userRegistered==true)
  {
    
    console.log(`Adult and registered early race time 9:30 and race number ${raceNumber}`)
  }
else if(runnerAge>18 && userRegistered==false)
  {
    console.log(`Late adults race time 11:00 and race number ${raceNumber}`)
  }
else if(runnerAge==18)
  {
    console.log('they should see the registration desk')
  }
else
  {
    console.log(`Youth registrants run at 12:30 pm and race number ${raceNumber}`)
  }
