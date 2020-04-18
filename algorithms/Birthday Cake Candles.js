function birthdayCakeCandles(ar) {
var max = 0;
var counter = 0;
ar.forEach(element => {
        if (element > max) {
            max = element;
            counter = 1;
        } else if (element === max) {
            counter++;
        }
    });
    return counter;
}
