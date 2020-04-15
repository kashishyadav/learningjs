/*QUESTION:Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.

There are a few simple rules for translating text to whale language:

There are no consonants. Only vowels excluding “y”.
The u‘s and e‘s are extra long, so we must double them in our program.
Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean.*/
let input='Hi, Human'
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray=[]
for(let i=0;i<input.length;i++)
{
  let c=input[i]
  //console.log(c)
  if(vowels.indexOf(c)!=-1)
  {
    if (input[i] === 'e' || input[i] === 'u')
    {
    resultArray.push(input[i])
    resultArray.push(input[i])
    }
    else
    {
       resultArray.push(input[i])
    }
   
    
  }
}

let s=""
for(var i = 0; i < resultArray.length; i += 1) {
  s += resultArray[i] + "";
}
console.log(s.toUpperCase())
