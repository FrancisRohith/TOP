function node(data){
    this.data = data
    this.next = null
}

function linkedList(){
    this.head = null
    this.append = function(data){
        const newNode = new node(data)
        if(this.head==null){
            this.head = newNode
        }else{
            let current = this.head
            while(current.next!==null){
                current = current.next
            }
            current.next = newNode
        }
    }
    this.prepend = function(data){
        const newNode = new node(data)
        if(this.head==null){
            this.head = newNode
        }else{
            newNode.next = this.head
            this.head = newNode
        }
    }
    this.size = function(){
        let size = 0
        let current = this.head
        while(current){
            size++
            current = current.next
        }
        return size
    }
    this.headNode = function(){
        return this.head.data
    }
    this.tail = function(){
        let current = this.head
        while(current.next){
            current = current.next
        }
        return current.data
    }
    this.at = function(index){
        current = this.head
        while(current && index>0){
            current = current.next
            index--
        }
        return current ? current.data : 'no data'
    }
    this.pop = function(){
        let current = this.head
        while(current.next.next !== null){
            current = current.next
        }
        current.next = null
    }
    this.contains = function(data){
        current = this.head
        while(current){
            if(current.data==data){return true}
            current = current.next
        }
        return false
    }
    this.find = function(data){
        let index = 0
        let current = this.head
        while(current){
            if(current.data == data){return index}
            current = current.next
            index++
        }
        return 'no data'
    }
    this.insertat = function(data,index){
        let current = this.head
        for(let i=0;i<index-1;i++){current=current.next}
        const newNode = new node(data)
        
        newNode.next = current.next
        current.next = newNode
    }
    this.removeat = function(index){
        let i=1
        let current= this.head
        let prev = null
        while(current.next && i<index){
            prev = current
            current = current.next
            i++
        }
        prev.next = current.next
    }
    this.toString = function(){
        let current = this.head
        result = ''
        while(current){
            result+=`(${current.data})->`
            current=current.next
        }
        result+='null'
        return result
    }
}

const list = new linkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.prepend("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString())
console.log(list.size())
console.log(list.headNode())
console.log(list.tail())
console.log(list.at(4))
console.log(list.pop())
console.log(list.toString())
console.log(list.contains('snake'))
console.log(list.contains('turtle'))
console.log(list.find('parrot'))
console.log(list.find('turtle'))
console.log(list.insertat('turtle',3))
console.log(list.toString())
console.log(list.removeat(4))
console.log(list.toString())