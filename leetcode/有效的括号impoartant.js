var isValid = function(s) {
    const map = {
        '(': ')',
        '[': ']',
        '{': '}',
    }
    if (!s) {
        return true;
    }
    const stack = [];
    const arr = s.split('');
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element == '(' || element == '[' || element == '{') {
            stack.push(map[element]);
        } else {
            if (!stack.length || stack.pop() != element) {
                return false
            }
        }
    }
    return !stack.length
};
console.log(isValid('()'), 'isValid');