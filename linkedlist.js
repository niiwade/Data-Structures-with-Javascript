 // perform add, remove,retrieve and search operation on a linked list

function linkedList () {
 this.head = null
 this.tail = null 
  
}


function Node(value, next, prev){

  this.value = value,
  this.next = next,
  this.prev = prev
}

// const node1 = new Node (100, 'node2', 'null')

// console.log(node1)


// add node

linkedList.prototype.addtoHead = function (value){

  //create new node
  const newNode = new Node (value, this.head, null)

  this.head ? this.head.prev = newNode : this.tail = newNode

  this.head = newNode
}



const ll = new linkedList ()

ll.addtoHead(100)
ll.addtoHead(300)

console.log(ll)