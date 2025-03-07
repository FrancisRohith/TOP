function hash(key){
    let hashCode = 0
    const primeNumber = 31
    for(let i=0;i<key.length;i++){
        hashCode=primeNumber*hashCode+key.charCodeAt(i)
    }
    return hashCode
}
function node(key,value){
    this.key = key
    this.value = value
    this.next = null
}
function hashMap(){
    let no_of_keys = 0
    this.capacity = 16
    this.loadFacctor = 0.75
    let hashArr = new Array(this.capacity)
    if((this.capacity*this.loadFacctor)<no_of_keys){
        this.capacity *= 2
    }
    this.resize = function(){
        this.capacity *= 2
        const oldHashArr = hashArr
        hashArr = new Array(this.capacity)
        oldHashArr.forEach(nodes=>{
            while(nodes){
                this.set(nodes.key,nodes.value)
                nodes = nodes.next
            }
        })
    }
    this.set = function(key,value){
        if((this.capacity*this.loadFacctor)<no_of_keys){
            this.resize()
        }
        const index = Math.floor(hash(key)%this.capacity)
        if (index < 0 || index >= hashArr.length) {
            throw new Error("Trying to access index out of bounds");
          }          
        let current = hashArr[index]
        if(!current){
            hashArr[index] = new node(key,value)
        }else{
            while(current){
                if(current.key == key){current.value = value}
                if(!current.next){break}
                current=current.next
            }
            current.next = new node(key,value)
        }
        no_of_keys++
    }
    this.get = function(key){
        const index = Math.floor(hash(key)%this.capacity)
        let current = hashArr[index]
        while(current){
            if(current.key == key){
                return current.value
            }
            current = current.next
        }
        return 'null'
    }
    this.has = function(key){
        const index = Math.floor(hash(key)%this.capacity)
        let current = hashArr[index]
        while(current){
            if(current.key == key){return true}
            current = current.next
        }
        return false
    }
    this.remove = function(key){
        const index = Math.floor(hash(key)%this.capacity)
        let current = hashArr[index]
        let prev = null
        if(current && current.key == key){
            hashArr[index] = current.next
            return true
        }
        while(current){
            if(current.key == key && current){
                prev.next = current.next
                return true
            }
            prev = current
            current = current.next
        }
        return false
    }
    this.length = function(){
        return no_of_keys
    }
    this.clear = function(){
        hashArr.forEach((nodes,index)=>{
            if(nodes){
                let current = nodes
                while(current){
                    let temp = current
                    current = current.next
                    temp = null
                }
            }
            hashArr[index] = null
        })
    }
    this.keys = function(){
        const keysOnly = new Array(this.length())
        hashArr.forEach(nodes=>{
            while(nodes){
                keysOnly.push(nodes.key)
                nodes = nodes.next
            }
            
        })
        return keysOnly
    }
    this.values = function(){
        const valuesOnly = new Array(this.length())
        hashArr.forEach(nodes=>{
            while(nodes){
                valuesOnly.push(nodes.value)
                nodes = nodes.next
            }
            
        })
        return valuesOnly
    }
    this.entries = function(){
        const entry = new Array(this.length())
        hashArr.forEach((nodes)=>{
            if(nodes){
                entry.push([nodes.key,nodes.value])
                if(nodes.next){
                    let current = nodes.next
                    entry.push([current.key,current.value])
                }
            }
        })
        return entry
    }
    this.getArray = function(){
        return hashArr
    }
}

const test = new hashMap()

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

//console.table(test.entries())
//console.log(test.get('lion'))
//console.log(test.has('lion'))
//console.log(test.remove('lion'))
//console.table(test.entries())
//console.log(test.length())
//test.clear()
//console.table(test.values())

console.table(test.entries())
console.log(test.getArray())
