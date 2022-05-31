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


// add node to head 

linkedList.prototype.addtoHead = function (value){

  //create new node
  const newNode = new Node (value, this.head, null)

  // if linked list has nodes present  
  this.head ? this.head.prev = newNode : this.tail = newNode

  this.head = newNode
}


 
// const link = new linkedList ()

// link.addtoHead(100)
// link.addtoHead(300)
// link.addtoHead(600) 

// console.log(link) 


//add node to tail


linkedList.prototype.addtoTail = function(value){

  //add new node
const newNode = new Node(value, null, this.tail )

//check if there node is present
this.tail ? this.tail.next = newNode : this.head = newNode

this.tail = newNode
  
}

// const links = new linkedList()

// links.addtoTail(100)
// links.addtoTail(200)
// links.addtoTail(300)
// links.addtoHead(400)

// console.log(links.tail.prev.prev)



// remove node from head and return value


linkedList.prototype.removeHead = function (){

  //if linkedlist is empty

  if (!this.head) return null

  // if linked is not empty

  const val = this.head.value

  this.head = this.head.next

  this.head ? this.head.prev =null : this.tail =null

  return val
  
  
}


// const link = new linkedList()

// link.addtoHead(100)
// link.addtoHead(200)
// link.addtoTail(300)

// link.removeHead()

// console.log(link)


//remove node from tail and return its value

linkedList.prototype.removeTail = function(){

  // if linkedlist is empty
  if (!this.tail) return null

  // if linked list is not empty
  const val = this.tail.value

  this.tail = this.tail.prev

  this.tail ? this.tail.next = null : this.head = null

  return val
}


// const links = new linkedList()

// links.addtoHead(100)
// links.addtoHead(200)
// links.addtoTail(300)

// links.removeTail()

// console.log(links)


// Search


linkedList.prototype.search = function(searchValue){

 
  
}