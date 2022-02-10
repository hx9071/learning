// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
// 示例 1:
// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
var baoli = function(str) {
    let length = (str + '').length;
    let res = 1;
    let charArray = str.split('');
    let freq = new Array();
    for (let left = 0, right = 0; right < length; right++) {
        freq[charArray[right]]++;
        console.log(freq);
        if (freq[charArray[right]] == 2) {
            while (freq[charArray[right]] == 2) {
                freq[charArray[left]]--;
                left++
            }
        }
        res = Math.max(res, right - left + 1)
    }

    console.log(res, );
}


baoli('abcabcbb')