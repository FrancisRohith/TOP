let display_text = ""

const container = document.querySelector("#container")

const display = document.createElement("div")
display.classList.add("display")
display.textContent = display_text
container.appendChild(display)

const numbers = document.createElement("div")
numbers.classList.add("numbers")
for(let i=9;i>=0;i--){
    const number = document.createElement("div")
    number.classList.add("number")
    number.textContent = i
    number.addEventListener("click",()=>{
        display_text += number.textContent
        display.textContent = display_text
    })
    numbers.appendChild(number)
}
const equal = document.createElement("div")
equal.classList.add("number")
equal.textContent = "="
equal.addEventListener("click",()=>{operation(display_text.split(''))})
numbers.appendChild(equal)
const back = document.createElement("div")
back.classList.add("number")
back.textContent = "BACK"
back.addEventListener("click",()=>{
    display_text = display_text.slice(0,-1)
    display.textContent = display_text
})
numbers.appendChild(back)
container.appendChild(numbers)

const operator = document.createElement("div")
operator.classList.add("operators")
const plus = document.createElement("div")
plus.classList.add("operator")
plus.textContent = "+"
plus.addEventListener("click",()=>{display_text += plus.textContent 
    display.textContent = display_text})
const minus = document.createElement("div")
minus.classList.add("operator")
minus.textContent = "-"
minus.addEventListener("click",()=>{display_text += minus.textContent 
    display.textContent = display_text})
const cross = document.createElement("div")
cross.classList.add("operator")
cross.textContent = "*"
cross.addEventListener("click",()=>{display_text += cross.textContent 
    display.textContent = display_text})
const slash = document.createElement("div")
slash.classList.add("operator")
slash.textContent = "/"
slash.addEventListener("click",()=>{display_text += slash.textContent 
    display.textContent = display_text})
operator.appendChild(plus)
operator.appendChild(minus)
operator.appendChild(cross)
operator.appendChild(slash)
container.appendChild(operator)

function operation(array){
    const stack = []
    let i=0
    while(i<array.length){
        let op = array[i]
        if(!isNaN(op)){
            stack.push(parseFloat(op))
        }
        else if(op==='*' || op==='/'){
            let operand1 = stack.pop()
            let operand2 = parseFloat(array[++i])
            if (op == "*"){stack.push(operand1*operand2)}
            else {
                if (operand2!==0){stack.push(operand1/operand2)}
            }  
        }else{
            stack.push(op)
        }
        i++
    }
    let result = stack[0]
    for(let j=1;j<stack.length;j+=2){
        let operator = stack[j]
        let operand = stack[j+1]
        result = operator==='+' ? result+operand : result-operand
    }

    display_text = result.toString()
    display.textContent = display_text
}

