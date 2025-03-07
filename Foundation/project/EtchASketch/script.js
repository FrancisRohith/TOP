const nog = document.querySelector("#button")
nog.addEventListener("click",numberOfGrid)
function numberOfGrid(){
    let nog = prompt("Enter number of grid")
    createGrid(nog)
    
}
function createGrid(n){
    const container = document.querySelector("#container")
    const div = document.createElement("div")
    let width = 960/n
    container.innerHTML = ""
    for(let i=0;i<n;i++){
        const row = document.createElement("div")
        row.style.backgroundColor = "white"
        row.style.display = "flex"
        for(let j=0;j<n;j++){
            const columns = document.createElement("div")
            columns.style.backgroundColor = "black"
            columns.style.border = "1px solid white"
            columns.style.width = `${width}px`
            columns.style.height = `${width}px`
            row.appendChild(columns)
            columns.addEventListener("mouseover",()=>{
                columns.style.backgroundColor = "grey"
            })
        }
        div.appendChild(row)
    }
    container.appendChild(div)
}


