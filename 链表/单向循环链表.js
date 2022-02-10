function CircularLinkedList() {
    var Node = function(element) {
        this.element = element;
        this.next = null;
    }

    var length = 0,
        head = null;

    this.append = function(element) {
        var node = new Node(element),
            current;

        if (!head) {
            head = node;
            node.next = head;
        } else {
            current = head;

            while (current.next !== head) {
                current = current.next;
            }

            current.next = node;
            node.next = head;
        };

        length++;
        return true;
    };

    this.insert = function(position, element) {
        if (position > -1 && position < length) {
            var node = new Node(element),
                index = 0,
                current = head,
                previous;


            if (position === 0) {

                node.next = head;
                head = node;

            } else {

                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }

                previous.next = node;
                node.next = current;

            };

            length++;
            return true;
        } else {
            return false;
        }
    };
    //移除指定位置元素
    this.removeAt = function(position) {
        if (position > -1 && position < length) {
            var current = head,
                previous,
                index = 0;

            if (position === 0) {

                head = current.next;

            } else {

                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }

                previous.next = current.next;
            };

            length--;
            return current.element;
        } else {
            return null;
        }
    };
    //移除指定元素
    this.remove = function(element) {
        var current = head,
            previous,
            indexCheck = 0;

        while (current && indexCheck < length) {
            if (current.element === element) {
                if (indexCheck == 0) {
                    head = current.next;
                    length--;
                    return true;
                } else {
                    previous.next = current.next;
                    length--;
                    return true;
                }
            } else {
                previous = current;
                current = current.next;
                indexCheck++;
            }
        }
        return false;
    };
    //移除最后一个元素
    this.remove = function() {
        if (length === 0) {
            return false;
        }

        var current = head,
            previous,
            indexCheck = 0;

        if (length === 1) {
            head = null;
            length--;
            return current.element;
        }

        while (indexCheck++ < length) {
            previous = current;
            current = current.next;
        }
        previous.next = head;
        length--;
        return previous.element; //返回移除的元素
    };

    this.indexOf = function(element) {
        var current = head,
            index = 0;

        while (current && index < length) {
            if (current.element === element) {
                return index;
            } else {
                index++;
                current = current.next;
            }
        }
        return false;
    };


    this.isEmpty = function() {
        return length === 0;
    };

    this.size = function() {
        return length;
    };

    this.toString = function() {
        var current = head,
            string = '',
            indexCheck = 0;

        while (current && indexCheck < length) {
            string += current.element;
            current = current.next;
            indexCheck++;
        }

        return string;
    };

}

let  mylist = new  CircularLinkedList();
mylist.append('A');
mylist.append('B');
mylist.append('C');
mylist.append('D');

console.log(mylist.toString());
console.log(mylist.remove());  //D
console.log(mylist.toString());