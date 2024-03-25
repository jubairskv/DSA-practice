//------------------------DSA Program -----------------------------------------
// find duplicate number in the array
{/*
var findDuplicate=function(nums){
    for(let i=0; i<nums.length; i++){
        for(let j =i+1; j<nums.length; J++){
            if(nums[i]===nums[j]){
                return nums[i];
                break
            }

        }
    }
    return -1

}
const nums=[1,3,4,2,2]
console.log("dulplicate number is :" ,findDuplicate(nums)) */}

//leet code accepted code
var findDuplicate = function(nums) {
    let slow = nums[0];     //this slow go 1 step
    let fast = nums[0];     //this fast move 2 step like 2 index
    
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow !== fast);     //2!==2 -> false   when it happen true  2!=="2"  -> true
    
    fast = nums[0];            // here fast setting up to move 1 step
    while (slow !== fast) {     //2!==2 -> false
        slow = nums[slow];
        fast = nums[fast];
    }
    
    return slow;      //return slow value 2
};

const nums = [1,3,4,2,2]; // Example array
console.log("Duplicate number is:", findDuplicate(nums));
