//EULERS METHOD
// Yn+1 = Yn + h * f(x,y)

const prompt = require("prompt-sync")({
  fake_val: "OPTIONAL CONFIG VALUES HERE",
});

function f(x, y) {
  //   f(x,y) = x + y
  return x + y;
}

var x = 0,
  y = 1,
  b = 0.1,
  n = 5;

var h = (b - x) / n;
// console.log(x, b, h, y);

var arrX = [x];
var arrY = [y];

while (arrX[arrX.length - 1] < b) {
  arrX.push(arrX[arrX.length - 1] + h);
}

// console.log(arrX[0], arrY[0]);
// f = 1.0;
for (var i = 0; i < arrX.length - 1; ++i) {
  //   console.log(f);
  arrY.push(arrY[arrY.length - 1] + f(arrX[i], arrY[i]) * h);
  //   console.log(arrY[arrY.length]);
}
console.log(arrY);
