let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let storyWords=story.split(' ')
//using filter method along with using index of or either includes can also be user
console.log(storyWords.length)
let betterWords=storyWords.filter(word=>{
 return unnecessaryWords.indexOf(word)==-1
//  return (word.includes(unnecessaryWords[0])==false ||
//  word.includes(unnecessaryWords[1])==false||
//  word.includes(unnecessaryWords[2])==false)
})
let countOfOverused=storyWords.filter(word=>{
 return unnecessaryWords.indexOf(word)!=-1})
//console.log(betterWords)
let count1=0,count2=0,count3=0
for(let i=0;i<storyWords.length;i++)
{
  if(storyWords[i].includes('extremely'))
  {
    count1++
  }
  else if(storyWords[i].includes('literally'))
  {
    count2++;
  }
   else if(storyWords[i].includes('actually'))
  {
    count3++;
  }
}
console.log("extremely count "+parseInt(count1)+"\nliterally count "+count2+" \nactually count "+count3)
let sentance=0
// for(let i=0;i<story.length;i++)
// {
//   if(story.charAt(i)==='.'){
//     sentance++;
//   }
// }
let s=story.forEach( word => {
  if (word[word.length-1] === '.' || word[word.length-1] === '!') {
    sentance+=1;
  }
});
const logInfo=(sentance,countOfOverused,betterWords)=>
{ 
console.log("sentance count "+sentance)
console.log("Number of time overused words appers "+countOfOverused.length)

}
logInfo(sentance,countOfOverused,betterWords)
console.log(betterWords.join(''))

