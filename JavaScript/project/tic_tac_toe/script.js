const board = document.querySelector('.board')
const output = document.querySelector('output')
const startbtn = document.querySelector('.start')
const resetbtn = document.querySelector('.reset')

function gameBoard(){
    const board = []
    let marked = []
    for(let i=0;i<3;i++){
        board[i] = []
        marked[i] = []
        for(let j=0;j<3;j++){
            board[i][j] = " "
            marked[i][j] = false
        }
    }

    const printBoard = ()=>{
        for(let i=0;i<3;i++){
            console.log(board[i])
        }
    }
    return {board,marked,printBoard}
}

function gameControl(playerOne,playerTwo){
    
    let marked_x = []
    let marked_o = []
    let winner_declare = false

    const {board,marked,printBoard} = gameBoard()

    const players = [{name: playerOne, marker: 'X'},{name: playerTwo, marker: 'O'}]

    let active_player = players[0]

    const switch_turn = ()=> {active_player = active_player===players[0] ? players[1] : players[0]}

    function mark(row,col,marker){
        if(marked[row][col]){return false}
        board[row][col] = marker
        marked[row][col] = true
        marker==='X' ? marked_x.push([row,col]) : marked_o.push([row,col])
        printBoard()
        return true
    }

    const checkResult = (marray)=>{
        const rows = [0,0,0]
        const cols = [0,0,0]
        let diag1 = 0,  diag2 = 0
        for(const [row,col] of marray){
            rows[row]++
            cols[col]++
            if(row===col){diag1++}
            if(row+col===2){diag2++}
        }

        return rows.includes(3) || cols.includes(3) || diag1==3 || diag2==3;
    }

    const isboardfull = ()=>{
        for (let i of marked){
            if (i.includes(false)) return false
        }
        return true
    }

    const playRound = (row,col)=>{
        if (winner_declare){return}
        if(!mark(row,col,active_player.marker)) return
        if(checkResult(active_player.marker=='X' ? marked_x : marked_o)){
            output.textContent =  (`winning player is ${active_player.name}`)
            winner_declare = true
            return
        } 
        if(isboardfull()){
            output.textContent =  ("Match is tied")
            winner_declare = true
            return
        }
        switch_turn()
        output.textContent = (`${active_player.name} it's your turn`) 
        
    }
    return {playRound,}
}

function start(){
    const playerOne = 'ram'
    const playerTwo = 'sam'
    const{playRound} = gameControl(playerOne,playerTwo)
    
    const boxes = document.querySelectorAll('.board>div')
    
    boxes.forEach((box,i)=>{
        const row = Math.floor(i/3)
        const col = i%3
        let count = 1
        box.addEventListener('click',()=>{
            playRound(row,col)
            if(count === 1){
                box.textContent = 'X'
                count = 0
            }
            else{
                box.textContent = 'O' 
                count = 1
            } 
            
            box.style.fontWeight = 'bold'
            box.style.fontSize = '5rem'; 
            
        })
    })
    output.textContent =  `${playerOne} it's your turn`
}

startbtn.addEventListener('click',()=>start())
resetbtn.addEventListener('click',()=>start())