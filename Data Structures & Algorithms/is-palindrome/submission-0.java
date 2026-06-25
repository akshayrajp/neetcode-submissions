class Solution {
    public boolean isPalindrome(String s) {
        String lowerCaseStr = s.toLowerCase();
        String cleanStr = "";

        for (int i = 0; i < lowerCaseStr.length(); i++) {
            if (Character.isLetterOrDigit(lowerCaseStr.charAt(i))) {
                cleanStr += lowerCaseStr.charAt(i);
            }
        }

        int i = 0, j = cleanStr.length() - 1;

        while (i < j) {
            if (cleanStr.charAt(i) != cleanStr.charAt(j)) {
                return false;
            }

            i++;
            j--;
        }

        return true;
    }
}
