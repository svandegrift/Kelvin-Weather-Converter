//constant value in kelvin
const kelvin = 0;
// subtract 273 from kelvin to get celsius
const celsius = kelvin - 273;
// algorythm for converting
let fahrenheit = celsius * (9/5) + 32;
// .floor() rounds the float down to a int
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
