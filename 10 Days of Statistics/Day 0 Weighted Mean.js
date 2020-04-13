function processData(input) {
   var input1 = input.split("\n")[1].split(" ").map(v=>v*1);
   var input2 = input.split("\n")[2].split(" ").map(v=>v*1);
   var i;
   var sum = 0;
   var sum2 = 0;
   var length1 = input1.length;
   var length2 = input2.length;
   for (i = 0; i < length1; i++) {
       sum += (input1[i] * input2[i]);
       sum2 += (input2[i])
   }
   var weighted_mean = (sum / sum2).toFixed(1);
   console.log(weighted_mean);
} 
