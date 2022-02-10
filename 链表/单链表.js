class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class linkList {
    constructor() {
        this.size = 0;
        this.head = null;
    }
    append(element) {
        let node = new Node(element);
        if (this.head == null) {
            this.head = node;
        } else {
            // 根据长度找到最后一个
            let current = this.getNode(this.size - 1);
            current.next = node;
        }
        this.size++
    }
    getNode(index) {
            if (index < 0 || index > this.size) {
                throw new Error('error')
            }
            let current = this.head;
            for (let i = 0; i < index; i++) {
                current = current.next
            }
            return current
        }
        // 向指定位置添加 在指定位置之后
    appendAt(position, elemnt) {
            if (position < 0 || position >= this.size) {
                throw new Error('error')
            }
            let node = new Node(elemnt);
            if (position == 0) {
                node.next = this.head;
                this.head = node;
            }
            if (position < this.size) {
                let current = this.getNode(position); //找到最初位置上的值
                let pre = this.getNode(position - 1);
                pre.next = node;
                let now = this.getNode(position);
                console.log(current, 'current', pre, 'pre', now);
                node.next = current;
            }
        }
        //移除l
    remove(position) {
            if (position < 0 || position >= this.size) {
                throw new Error('error')
            }
            let pre = this.getNode(position - 1);
            let current = this.getNode(position);
            pre.next = current.next
            this.size--
        }
        // 查找指定元素
    indexof(element) {
        let current = this.head;
        for (var i = 0; i < this.size; i++) {
            if (current.element == element) {
                return i + 1;
            }
            current = current.next;
            console.log(current, '-1');
        }
        return -1
    }
}

let ll = new linkList();
ll.append(11);
ll.append(2);
ll.append(1);
ll.append(2);
ll.append(1);
ll.appendAt(2, 11);
// console.log('---1');
console.dir(ll, { depth: 100 });
ll.remove(2);

console.log(ll.indexof(11), '---2');
// console.log('---2');
// console.dir(ll, { depth: 100 }, );