class Solution {
    public String stringSort(String x){
        char[] tempSArray = x.toCharArray();
        Arrays.sort(tempSArray);

        return new String(tempSArray);
    }
    public boolean isAnagram(String s, String t) {
       return stringSort(s).equals(stringSort(t));
    }
}
