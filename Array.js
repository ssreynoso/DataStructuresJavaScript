class ArrayPersonalizado {
  constructor() {
    this.length = 0
    this.data = {}
  }
  
  get(index) {
    return data[index];
  }
  
  push(el) {
    this.data[this.length] = el
    this.length++
    return this.data
  }
  
  pop() {
    const el = this.data[this.length - 1]
    delete this.data[this.length - 1]
    this.length--
    return el
  }
  
  delete(index) {
    const item = this.data[index]
    this.shiftIndex(index)
    return item
  }
  
  shiftIndex(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i+1]
    }
    delete this.data[this.length - 1]
    this.length--
  }
  
  // Hacer método para eliminar primer elemento y para agregar alprincipio
}