class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}
class CircularLinkedList {
    constructor() {
        this.size = 0;
        this.head = null;
    }
    append(element) { // 插入
        let node = new Node(element)
        if (this.head == null) {
            this.head = node;
            node.next = this.head;
            return;
        }
        let current = this.head;
        while (current.next != this.head) { // 找到最后一项
            current = current.next;
        }
        this.size++;
        current.next = node;
        node.next = this.head;
    }
    delete(position) { // 删除指定位置
            if (position < 0) {
                throw new Error('error错误')
            }
            if (position == 0) {
                this.head = this.head.next;
                return
            }
            let index = 0;
            let current = this.head;
            let pre;
            while (index++ < position) {
                pre = current;
                current = current.next;
            }
            pre.next = current.next;
        }
        // 获取指定位置的元素
    getNode(position) {
        let current = this.head;
        let index = 0;
        while (index++ < position) { // 找到最后一项
            current = current.next;
        }
        return current;
    }
    appendAt(position, element) { // 向指定位置插入
            if (position < 0) {
                throw new Error('------传值错误')
            }
            let index = 0;
            let pre;
            let node = new Node(element)
            let current = this.head;
            while (index++ < position) { // 找到最后一项
                pre = current;
                current = current.next;
            }
            pre.next = node;
            node.next = current;
            this.size++;
        }
        // 移除指定元素
    deletElement(element) {
        let current = this.head;
        let pre;
        let index = 0;
        while (index < this.size) {
            if (pre.element == element) {
                pre.next = current.next;
                this.size--
            } else {
                pre = current;
                current = current.next;
                index++;
            }

        }
    }
}

let node = new CircularLinkedList();
let nodes = [1, 2, 3, 4, 5];
nodes.forEach(element => {
    node.append(element);
});
console.dir(node, { depth: 100 });
// node.delete(0); // node.delete(2);
// console.log('----------------');
// console.dir(node, { depth: 100 });
// console.log('----------------', node.getNode(1));
// node.appendAt(1, 11)
node.deletElement(2)
console.dir(node, { depth: 100 });