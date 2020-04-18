function plusMinus(arr) {
var count_pos = 0;
var count_neg = 0;
var count_zero = 0;
var n = arr.length;
var i;

for (i = 0; i < n; i++) {
    if ( arr[i] > 0 ) {
        count_pos++
        } else if ( arr[i] < 0 ) {
        count_neg++
        } else if ( arr[i] == 0 ) {
        count_zero++
        }
    }
    console.log(count_pos / n);
    console.log(count_neg / n);
    console.log(count_zero / n);
}
