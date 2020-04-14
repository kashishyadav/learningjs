//QUESTION:Using array methods, you will transform an array of strings into a secret message!
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
secretMessage.pop()
console.log(secretMessage.length)
secretMessage.push('to','program')
console.log(secretMessage.length)
secretMessage[7]='right'
secretMessage.shift()
//remove first element and return deleted element
secretMessage.unshift('Programming')
//add element as first element in array and return updated length
secretMessage.splice(7,12,'know')
//it will replace string
console.log(secretMessage.join(' '))
