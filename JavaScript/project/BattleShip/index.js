function ship(length,axis){
    this.axis = axis
    this.length = length
    let hits = 0
    this.sunk = false
    this.hit = function(){
        hits++
        if(hits>=length){
            this.sunk = true
        }
    }
    this.isSunk = function(){
        return this.sunk
    }
}

function gameBoard(ships,status){
    this.boardCoordinates = []
    this.randomElement = function(){
        const randomRow = Math.floor(Math.random()*this.boardCoordinates.length)
        const randomCol = Math.floor(Math.random()*this.boardCoordinates[0].length)
        return [randomRow,randomCol]
    }
    this.createBoard = function(){
        const container = document.createElement('div')
        container.classList.add('container')

        for(let i=0;i<10;i++){
            const row = document.createElement('div')
            row.classList.add('row',`row${i}`)
            this.boardCoordinates[i] = []
            for(let j=0;j<10;j++){
                const cell = document.createElement('div')
                cell.classList.add('cell' ,`cell${i}_${j}`,'unmarked',`${status}`)
                row.appendChild(cell)
                this.boardCoordinates[i][j] = {'ship':false,'attacked':false,'sunk':false}
                
            }
            container.appendChild(row)
        }
        ships.forEach(shipObject=>{
            let placed = false
            while(!placed){
                if(shipObject.axis == 'x'){
                    let [x1,y1] = this.randomElement()
                    let x2 = x1+shipObject.length-1
                    if(x2<10 && this.boardCoordinates.slice(x1,x2+1).every(rows=>!rows[y1].ship)){
                        for(let i=x1;i<=x2;i++){
                            const shipCell = container.querySelector(`.cell${i}_${y1}`)
                            this.boardCoordinates[i][y1].ship = shipObject
                            shipCell.classList.add('ship') 
                        }
                        placed = true
                    }
                     
                }
                else if(shipObject.axis == 'y'){
                    let [x1,y1] = this.randomElement()
                    let y2 = y1+shipObject.length
                    if(y2<10 && this.boardCoordinates[x1].slice(y1,y2+1).every(cell=>!cell.ship)){
                        for(let j=y1;j<=y2;j++){
                            const shipCell = container.querySelector(`.cell${x1}_${j}`)
                            this.boardCoordinates[x1][j].ship = shipObject
                            shipCell.classList.add('ship')
                        }
                        placed = true 
                    }
                    
                } 

            }
             
        })
        return container
    }
    
    
    this.allShipSunk = function(){
        return ships.every(s=>s.isSunk())
    }
}

function player(name,status){
    const playerStatus = status ? 'active' : 'inactive'
    this.playerSide = document.createElement('div')
    this.playerSide.classList.add(`${playerStatus}Player`)
    this.name = name
    const ships = [new ship(1,'x'),new ship(2,'y'),new ship(3,'y'),new ship(4,'x')]
    this.buildShip = function(shipObject){
        const container = document.createElement('div')
        container.classList.add('singelSship')

        for(let i=0;i<shipObject.length;i++){
            const ship = document.createElement('div')
            ship.classList.add('shipComponent')
            ship.classList.add(`${playerStatus}`)
            ship.classList.add('unSunk')
            container.appendChild(ship)
        }
        return container
    }
    const totalShips = document.createElement('div')
    totalShips.classList.add('squadron') 
    ships.forEach(shipObject=>{
        const newShip = this.buildShip(shipObject)
        totalShips.appendChild(newShip)
    })
    this.playerSide.appendChild(totalShips)
    mainPage.appendChild(this.playerSide)
    this.battleBoard = new gameBoard(ships,status)
    const newGameBoard = this.battleBoard.createBoard()
    this.playerSide.appendChild(newGameBoard)
    this.receiveAttack = function(x,y){
        const container = document.querySelector('.container')
        console.log(`.cell${x}_${y}`)
        const attackedCell = container.querySelector(`.cell${x}_${y}`)
        attackedCell.classList.replace('unmarked','marked')
        let current = this.battleBoard.boardCoordinates[x][y]
        if(!current.attacked){
            if(current.ship){
                current.attacked = true
                current.ship.hit()
                current.sunk = current.ship.isSunk()
                attackedCell.textContent = 'X'
                if(current.sunk) {
                    attackedCell.classList.add('sunk')
                }
                console.log(`cell ${x},${y} attacked`)
            }
        }
    }
    const board=  this.battleBoard.boardCoordinates
    this.active = false
    this.playerLost = function(){
        return this.battleBoard.allShipSunk()
    }
    return this.playerSide,this.playerLost()
}
function game(){
    const player1 = new player('player1',true)
    const player2 = new player('player2',false)
    player1.active = true
    for(let i=0;i<10;i++){
        for(let j=0;j<10;j++){
            let currentCell = document.querySelector(`.cell${i}_${j}`)
            function handleClick(event) {
                this.play(i,j)
                console.log('Cell clicked!');
                currentCell.removeEventListener('click', handleClick);
            }
            currentCell.addEventListener('click', handleClick.bind(this));
        }    
    }
    
    this.play = function(x,y){
        if(!player1.playerLost() && !player2.playerLost()){
            if(player1.active){
                const activeCell = document.querySelector('.cell','.true')
                console.log(`${player1.name} attacks`)
                player1.receiveAttack(x,y)
                player2.active = true
                player1.active = false
                activeCell.classList.replace('true','false')
            }else{
                console.log(`${player2.name} attacks`)
                player2.receiveAttack(x,y)
                player1.active = true
                player2.active = false
            } 
            
        }
        if(player1.playerLost()){console.log(`${player2.name} wins!!`)}
        else{console.log(`${player1.name} wins!!`)}
        console.table(player1.battleBoard.boardCoordinates)
        console.table(player2.battleBoard.boardCoordinates)
    }
    mainPage.appendChild(player1.playerSide)
    mainPage.appendChild(player2.playerSide)
    
}
const mainPage = document.querySelector('.main_page')

const newGame = new game()
 
