class Node {
  constructor(value){
    this.value = value
    this.next  = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  append(value){
    const nodo = new Node(value)
    if (this.length === 0) {
      this.head = nodo
    } else {
      this.tail.next = nodo
    }
	  this.tail = nodo
    this.length++
    return nodo
  }
  
  prepend(value) {
    const nodo = new Node(value)
    if (this.length === 0) {
      this.tail = nodo
    } else {
      nodo.next = this.head
    }
    this.head = nodo
    this.length++
    return nodo
  }
  
  // implementar insert
  // averiguar cómo hacer métodos y propiedades privadas
  // implementar remove
}

const lista = new SinglyLinkedList()
lista.append(2)
lista.prepend(3)
