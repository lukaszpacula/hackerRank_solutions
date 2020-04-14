function processData(input) {
    var array = input.split("\n");  
    array.shift();
    array = array.join().split(' ').map(Number).sort((a, b) => a - b);

    var L = [];
    var U = [];
    function median(arr, count) {
        var l = arr.length;
        var h = Math.floor(l / 2);
        if (l % 2 == 0) {
            if (count == 0) {
            L = arr.slice(0, h);
            U = arr.slice(h);
            }
            return Math.floor((arr[h - 1] + arr[h]) / 2);
        }
        else {
            if (count == 0) {
                L = arr.slice(0, h);
                U = arr.slice(h + 1);
            }
        }
        return arr[h];
    }  
    var Q2 = median(array, 0);
    var Q1 = median(L, 1);
    var Q3 = median(U, 2);

    console.log(Q1);
    console.log(Q2);
    console.log(Q3);
} 
