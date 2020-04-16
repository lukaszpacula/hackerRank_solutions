function modifyArray(nums) {
    var mult = nums.map(function(number) {
        if ( number % 2 == 0) {
            return 2 * number; 
        } else {
            return 3 * number;
        }
    })
    return mult;
}
