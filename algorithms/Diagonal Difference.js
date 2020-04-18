function diagonalDifference(arr) {
    var sum = 0;
    var i;
    for (i = 0; i <= arr.length - 1; i++) {
        sum += arr[i][i] - arr[i].reverse()[i];
    }
    return Math.abs(sum);
};
