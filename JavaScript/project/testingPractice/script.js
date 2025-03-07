function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}
function reverseString(str){
    let newStr = ''
    for(let i=str.length-1;i>=0;i--){
        newStr += str[i]
    }
    return newStr
}
function add(x,y){
    return x+y
}
function subract(x,y){
    return x-y
}
function multiply(x,y){
    return x*y
}
function divide(x,y){
    return x/y
}
function caesarCipher(str,n){
    let result = ''
    for(let i=0;i<str.length;i++){
        let charCode = str.charCodeAt(i)
        if(charCode>=97 && charCode<=122){
            result+=String.fromCharCode(((charCode-97+n)%26)+97)
        }else if(charCode>=65 && charCode<=90){
            result += String.fromCharCode(((charCode-65+n)%26)+65)
        }
        else{result+=str[i]}
    }
    return result
}
function analyzeArray(arr){
    return {
        'average': (arr.reduce((a,b)=>a+b,0))/arr.length,
        'min': arr.reduce((a,b)=>a>b?b:a),
        'max': arr.reduce((a,b)=>a<b?b:a),
        'length': arr.length
    }
}
module.exports = {capitalize,reverseString,add,subract,multiply,divide,caesarCipher,analyzeArray}
