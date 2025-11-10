"use strict";

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arrNovo = arr.filter(function (e) {
  return e % 2 === 0;
});
console.log(arrNovo);
