class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        let result = "";
        
        // The longest common prefix cannot be longer than the shortest word in the array
        // So let's determine that first

        let shortestLength = Infinity;
        for(let i = 0; i < strs.length; i++){
            if(strs[i].length < shortestLength){
                shortestLength = strs[i].length;
            }
        }

        // Now we only need to check at most 'shortestLength' number of characters in every string
        for(let i = 0; i < shortestLength; i++){
            const check = strs[0][i];
            
            for(let j = 1; j < strs.length; j++){
                if(strs[j][i] !== check){
                    return result;
                }
            }
            
            result += check;
        }

        return result;
    }
}
