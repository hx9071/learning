const root = {
    val: "A",
    left: {
        val: "B",
        left: {
            val: "D"
        },
        right: {
            val: "E"
        }
    },
    right: {
        val: "C",
        right: {
            val: "F"
        }
    }
};
// 所有遍历函数的入参都是树的根结点对象
function preorder(root, name) {
    // 递归边界，root 为空
    if (!root) {
        return
    }

    // 输出当前遍历的结点值

    // 递归遍历左子树 
    preorder(root.left, '左节点');
    console.log('当前遍历的结点值是：', root.val, name)
        // 递归遍历右子树  
    preorder(root.right, '右节点')
}
preorder(root, '根节点开始')

// function xianxu() {
//     for (let key in root) {
//         bianli(root[key])
//     }

//     function bianli(element) {
//         if (element.left) {
//             bianli(element.left)
//         }
//         if (element.val) {
//             console.log(element.val);
//         }
//         if (element.right) {
//             bianli(element.right)
//         }
//     }
// }
// xianxu()