function twoSum(nums, target){
    // your code here
    for (let i = 0; i < nums.length; i++){
        var diff = target - nums[i];
        for (j = i + 1; j < nums.length; j++){
            if (nums[j] == diff){
                return [i, j]
            }
        }
    }
}

console.log(twoSum([2, 7, 11, 15], 9))