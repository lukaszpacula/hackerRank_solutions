function getSecondLargest(nums) {
nums.sort(function(a, b){return b - a});
var i = 0;
while (nums[i] == nums[i+1] ) {
    i++;
    }
return nums[i+1];
}
