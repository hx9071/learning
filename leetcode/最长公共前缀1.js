// 编写一个函数来查找字符串数组中的最长公共前缀。
// 如果不存在公共前缀，返回空字符串 ""。

// 提示：

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] 仅由小写英文字母组成
var longestCommonPrefix = function(strs) {
    // 如果为空数组，直接返回''
    if(strs.length===0) return ''
    // 假设最短的字符串为第一个元素
    let minLen = strs[0].length
    // 如果数组长度为1，直接返回第一个
    let minStr = strs[0]
    if(strs.length===1) return minStr
    let isCon = false // 判断是否公共前缀
    // 拿到真正的最短字符串
    strs.forEach(item => {
        if(item.length<minLen) {
            minLen = item.length
            minStr = item
        }
    })
    // 循环最短字符串
    for(let i= minLen; i>=0; i--){
        for(let j= 0; j<strs.length; j++){
            // 判断最短字符串是否为各个字符串的开头
            isCon = strs[j].indexOf(minStr)===0
            // 若有一个为false,直接跳过此次循环
            if(!isCon) break
        }
        // 判断每次循环的最终isCon是都为true
        if(isCon){
            // 如果每次都为true，则直接返回最短字符串本身
            return minStr
        }else{
            // 判断最短字符串是否为空
            if(minStr){
                // 判断i为零直接返回''
                if(i===0){
                    return ''
                }
                // 依次递减最短字符串
                minStr = minStr.substring(0,i)
            }else{
                // 最短字符串为空直接返回 ''
                return ''
            }
            
        }
    }
};
