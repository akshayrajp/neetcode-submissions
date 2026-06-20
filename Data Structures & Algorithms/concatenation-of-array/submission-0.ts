class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        let result: number[] = []
        for(let i = 0; i < nums.length; i++){
            
            result[i] = nums[i]
            result[nums.length + i] = nums[i];

        }

        return result;
    }
}
