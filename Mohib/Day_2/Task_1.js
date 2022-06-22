
const x = []

var input = prompt("Enter Number of values")
alert("Value is "+input)
for(let i =0;i<input;i++){
    x[i]=prompt("Enter Number ")
}
let sum = 0
for (let i = 0; i < x.length; i++) {
    sum = sum + x[i]
}
mean = sum/x.length
for (let i =0 ;i<x.length;i++){
    sumsquared = (x[i]-mean)^2
}
alert("Standard Deviation = "+sumsquared/x.length)