class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums: number[], k: number): boolean {
        if (k === 0) {
            return false;
        }
        if (nums.length === 1) {
            return false;
        }

        let l = 0,
            r = 1;

        while (r < nums.length) {
            if (nums[l] !== nums[r]) {
                if (Math.abs(r - l) < k) {
                    r++;
                } else {
                    l++;
                    r = l + 1;
                }
            } else {
                return true;
            }
        }
        return false;
    }
}
