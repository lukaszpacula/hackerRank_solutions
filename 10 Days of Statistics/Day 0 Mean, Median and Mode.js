function processData(input) {
input = input.split("\n")[1].split(" ").map(v=>v*1);
var sum = 0;
var i = 0;
var length = input.length;
for (i;i<length;i++) {
     sum += input[i];
    }  
var mean = sum / length;

console.log(mean.toFixed(1));  // 1st OUTPUT: MEAN

input.sort(function(a,b){return a-b});
var median = 0;
if (length % 2 == 0) {
    median = (input[length/2-1] + input[length/2]) / 2;
} else {
    median = input[Math.round(length/2-1)];
}
console.log(median.toFixed(1));  // 2nd OUTPUT: MEDIAN

var obj = {};
var mode = input.forEach(n => {
    obj[n] ? obj[n]++ : obj[n] = 1});
var count = 0;
var val, keys;
for (keys in obj) {
    if (obj[keys] > count) {
        count = obj[keys];
        val = keys;
    }
  }
  console.log(val);  // 3rd OUTPUT: MODE
}
