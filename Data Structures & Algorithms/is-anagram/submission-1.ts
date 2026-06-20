class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false;
        }

        const sMap = new Map<string, number>();
        const tMap = new Map<string, number>();

        for (let i = 0; i < s.length; i++) {
            sMap.set(s[i], sMap.has(s[i]) ? sMap.get(s[i]) + 1 : 0);
        }

        for (let i = 0; i < t.length; i++) {
            tMap.set(t[i], tMap.has(t[i]) ? tMap.get(t[i]) + 1 : 0);
        }

        for (let key of sMap.keys()) {
            if (sMap.get(key) !== tMap.get(key)) {
                return false;
            }
        }

        return true;
    }
}
