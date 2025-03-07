function fiboncci(n){
    let a = 0
    let b = 1
    let arr = [a,b]
    for(let i=0;i<n-2;i++){
        let c = a+b
        arr.push(c)
        a=b
        b=c
    }
    return arr
}
//console.log(fiboncci(8))

function fiboncciRecursion(n){
    if(n==0){return []}
    if(n==1){return [0]}
    if(n==2){return [0,1]}
    let arr = fiboncciRecursion(n-1)
    arr.push(arr[arr.length-1]+arr[arr.length-2])
    return arr
}

//console.log(fiboncciRecursion(8))

function mergeSort(arr){
    if(arr.length <= 1){
        return arr
    }
    const mid = Math.floor(arr.length/2)
    const arr1 = mergeSort(arr.slice(0,mid))
    const arr2 = mergeSort(arr.slice(mid))
    return merge(arr1,arr2)
}
function merge(arr1,arr2){
    const sorted = []
    let i=0;j=0
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            sorted.push(arr1[i])
            i++
        } else {
            sorted.push(arr2[j])
            j++
        }
        
    }
    while(i<arr1.length){
        sorted.push(arr1[i])
        i++
    }
    while(j<arr2.length){
        sorted.push(arr2[j])
        j++
    }
    return sorted
}

arr1 = [3, 2, 1, 13, 8, 5, 0, 1]
arr2 = [105, 79, 100, 110]
console.log(mergeSort(arr1))
console.log(mergeSort(arr2))