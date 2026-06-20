class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let leftPtr = 0,
            rightPtr = s.length - 1;

        while (leftPtr < rightPtr) {

            if (s[leftPtr] !== s[rightPtr]) {
                return false;
            }

            leftPtr++;
            rightPtr--;
        }
        
        return true;
    }

    validPalindrome(s: string): boolean {
        if (s.length <= 2) {
            return true;
        }

        let leftPtr = 0,
            rightPtr = s.length - 1;

        while (leftPtr < rightPtr) {
            if (s[leftPtr] !== s[rightPtr]) {
                // We've encountered our first mismatch
                // We expect to get a palindrome
                // after deleting either the leftPtr or the rightPtr
                return (
                    this.isPalindrome(
                        s.substring(0, leftPtr) + s.substring(leftPtr + 1, s.length),
                    ) ||
                    this.isPalindrome(
                        s.substring(0, rightPtr) + s.substring(rightPtr + 1, s.length),
                    )
                );
            }

            leftPtr++;
            rightPtr--;
        }

        return true;
    }
}
