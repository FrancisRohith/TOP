function node(data){
    this.data = data
    this.left = null
    this.right = null
}
function sorted(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    return arr
}
function tree(arr){
    this.root = null
    this.buildTree = function(arr){
        const sortedArr = sorted(arr)
        n=sortedArr.length
        this.root = bst(sortedArr,0,n-1)
        function bst(arr,start,end){
            if(start>end){return null}
            let mid = Math.floor((start+end)/2)
            const root = new node(arr[mid])
          
            root.left = bst(arr,start,mid-1)
            root.right = bst(arr,mid+1,end)
            return root
        }
        return this.root
    }
    this.insert = function(value){
        this.root = insertat(value,this.root)
        function insertat(value,root){
        if(!root){
            const newNode = new node(value)
            return newNode
        }
        if(root.data > value){root.left  = insertat(value,root.left)}
        if(root.data < value){root.right =  insertat(value,root.right)}
        return root
        }
        return this.root
    }
    this.isBalanced = function(){
        if(checkBalance(this.root)==-1){
            return false
        }else{
            return true
        }
        function checkBalance(current){
            if(!current) return 0
            let leftHeight = checkBalance(current.left)
            if(leftHeight === -1) return -1
            let rightHeight = checkBalance(current.right)
            if(rightHeight === -1) return -1
            if(Math.abs(leftHeight-rightHeight)>1) return -1
            return Math.max(leftHeight,rightHeight) + 1
        }
    }
    this.rebalance = function(){
        return this.buildTree(arr)  
    }
    this.levelOrder = function(){
        const q = []
        if(!this.root) return
        q.push(this.root)
        while(q.length>0){
            let current = q.shift()
            console.log(current.data)
            if(current.left) q.push(current.left)
            if(current.right) q.push(current.right)
        }
    }
    this.inorder = function(){
        const current = this.root
        if(!current) return
        this.inorder(current.left)
        console.log(current.data)
        this.inorder(current.right)
    }
    this.height = function(root,value){
        if(!root) return -1
        if(root.data == value) return 0
        if(!root) return 0
        const leftHeight = this.height(root.left,value)
        const rightHeight = this.height(root.right,value)
        if(leftHeight==-1&&rightHeight==-1) return -1
        
        
        return Math.max(leftHeight,rightHeight) + 1
    }
}

const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
const bstree = new tree(arr)
bstree.buildTree(arr)

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };
bstree.insert(11)
bstree.insert(12)
bstree.insert(13)
bstree.insert(14)
let head = bstree.insert(10)
//prettyPrint(head)
console.log(bstree.isBalanced())
//head = bstree.rebalance()
prettyPrint(head)
//bstree.levelOrder()
//bstree.inorder()
console.log(bstree.height(head,7))