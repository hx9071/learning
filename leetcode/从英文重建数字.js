class Solution {
    public String originalDigits(String s) {
        int[] nums = new int[26];
        for(char ch : s.toCharArray()) nums[ch - 'a']++;
        int[] cnt = new int[10];
        cnt[0] = nums['z' - 'a'];
        cnt[2] = nums['w' - 'a'];
        cnt[4] = nums['u' - 'a'];
        cnt[6] = nums['x' - 'a'];
        cnt[8] = nums['g' - 'a'];
        cnt[3] = nums['h' - 'a'] - cnt[8];
        cnt[5] = nums['f' - 'a'] - cnt[4];
        cnt[7] = nums['s' - 'a'] - cnt[6];
        cnt[1] = nums['o' - 'a'] - cnt[0] - cnt[2] - cnt[4];
        cnt[9] = nums['i' - 'a'] - cnt[5] - cnt[6] - cnt[8];
        StringBuilder sb = new StringBuilder();
        for(int i = 0; i < 10; ++i){
            for(int j = 0; j < cnt[i]; ++j) sb.append(i);
        }
        return sb.toString();
    }
}

1.找数字间的规律 通过单个字符 可以确定的数字 通过两个字符可以确定的数字
通过多个字符可以确定的数字  基本可以完成单个数字确定的

思路误区： 在发现规律后  居然想着将确认后的数字从字符中去除掉 势必会引起多余的计算
没发现数字字符的更多联系
