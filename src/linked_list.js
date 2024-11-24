class Node {
  constructor(_value) {
    this.value = _value
    this.next = null
  }
}

class LinkedList {
  constructor(initialValue) {
    this._head = new Node(initialValue)
  }

  insertAtBeginning(value){
    let node = new Node(value)
    if(this._head == null){
      this._head = node
    } else {
      node.next = this._head
      this._head = node
    }
  }
  insertAtIndex(value, insertAt){
    let node = new Node(value)
    let index = 0
    let current = this._head 
    while(index < insertAt ){
      console.log("Index", current)
      
      current = current.next
      index++
    }
  }
  insertAtEnd(value) {
    let node = new Node(value)
    let current = this._head

    while(current){
      if(current.next){
        current = current.next
      } else {
        current.next = node
        break
      }
    }
  }
  isElementPresent( value ){
    let current = this._head
    while(current){
      if(current.value == value ){
        return true
      } 
      current = current.next
    }
    return false
  }

  deleteNode(value) {
    let current  = this._head
    while(current){
      //we're at the final leaf
      if(!current.next){
        if(current.value == value){
          current.value == null
        } else {
          break
        }
      }
      // if the next one has the value we want to delete
      // then we should look at the next next
      // attach next next to current
      // if there is no next next, then current.next becomes null
      if(current.next && current.next.value == value){
        if(current.next.next){
          current.next = current.next.next
          break
        } else {
          current.next = null
          break
        }
      }
      // what if we're at the first node?
      if(current.value == value){
        if(!current.next){
          current.value = null
          break
        } else {
          this._head = current.next
          break
        }
      }

      current = current.next
    }
  }
  
  count() {
    let current = this._head
    let count = 0
    while(current){
      current = current.next
      count += 1
    }
    return count
  }
  
  debug(){
    let current = this._head
    console.log("Debug dump\n======================\n")
    while(current){
      console.log("dbg:", current)
      current = current.next
    }
  }
}
const quote = "Without music life would be a mistake"
const data = quote.split(" ").map( element => {
  const node = new Node(element)
  return node
})

console.log("Data len", data.length)
const node = new Node("hello")
console.log("next!", node.next)
const linkedlist = new LinkedList(node)
data.forEach( element => {
  // console.log("adding", element)
  linkedlist.insertAtEnd(element)
})

console.log("count", linkedlist.count())
console.log("Find", linkedlist.isElementPresent("Goodbye"))
// still have to figure out deleting from beginning
// linkedlist.deleteNode("hello")

let linkedlist2 = new LinkedList("hello")
linkedlist2.insertAtBeginning("wow")
linkedlist2.insertAtEnd("goodbye")
linkedlist2.insertAtIndex("irish", 2)
linkedlist2.deleteNode("wow")
console.log(linkedlist2.isElementPresent("goodbye"))
console.log(linkedlist2.isElementPresent("wow"))

linkedlist2.debug()

export {
  linkedlist,
  node
}