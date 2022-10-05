class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {

    #top    = null;
    #bottom = null;
    #length = 0;


    constructor() {}

    peek() {
      	if (this.#length === 0) return null;
        return this.#top.value;
    }

    pop(value) {
      	if (this.#length === 0) return null;
        if (this.#length === 1) this.#bottom = null;
        // Tengo que sacar y devolver al último
        const nodo = this.#top
        this.#top   = nodo.next
        this.#length--
      	return nodo.value
    }

    push(value) {
        const newNode = new Node(value);
      	newNode.next  = this.#top
      	this.#top     = newNode
        if (this.#length === 0){
            this.#bottom = newNode 
        }
        this.#length++
        return newNode.value
    }
}

const pila = new Stack()
console.log(pila.peek())
console.log(pila.pop())
console.log(pila.push(10))
console.log(pila.push(20))
console.log(pila.push(30))
console.log(pila)
console.log(pila.pop())
console.log(pila.pop())
console.log(pila.peek())
console.log(pila.pop())
console.log(pila)