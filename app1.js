//as it is not changing tempurature given by kelvin
const kelvin=295
//as kelvin is 273 more than celsius so we subtract it
var celsius
celsius=kelvin-273
//calculate farenheit by using fromula
var fahrenheit=celsius*(9/5)+32
//it will give integer value of farenheit
fahrenheit=Math.floor(fahrenheit)
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)
