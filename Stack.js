class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
      	if (this.length === 0) return null;
        return this.top.value;
    }

    pop(value) {
      	if (this.length === 0) return null;
        // Tengo que sacar y devolver al último
        const nodo = this.top
        this.top = nodo.next
      	return nodo.value
    }

    push(value) {
        const newNode = new Node(value);
      	newNode.value = value
      	newNode.next = this.top
      	this.top = newNode
    }
}