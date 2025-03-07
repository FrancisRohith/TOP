

function knightMoves(pt1,pt2){
    const queue = [[pt1,[pt1]]]
    const visited = new Set()
    while(queue.length>0){
        const [current, path] = queue.shift()
        const [x,y] = current
        if(x===pt2[0]&&y===pt2[1]) return path
        visited.add(`${x},${y}`)
        const edge = trueEdge(current)
        edge.forEach(e=>{
            let [nx,ny] = e
            if(!visited.has(`${nx},${ny}`)){
                queue.push([e,[...path,e]])
            }
        })
    }
    return []
}
function trueEdge([i,j]){
    
    if(i<8 && j<8){
        const possible = [[i+1,j+2],[i+1,j-2],[i-1,j+2],[i-1,j-2],[i+2,j+1],[i+2,j-1],[i-2,j+1],[i-2,j-1]]
        const edges = []
        possible.forEach(p=>{
            if(!(p[0]<0||p[1]<0)){
                if(p[0]<8 && p[1]<8){
                    edges.push(p) 
                } 
            }
        })
        return edges
    } 
}
console.log(knightMoves([0,0],[3,3]) == [[0,0],[2,1],[3,3]])
console.log(knightMoves([0,0],[3,3]) == [[0,0],[1,2],[3,3]])
console.log(knightMoves([3,3],[0,0]) == [[3,3],[2,1],[0,0]])
console.log(knightMoves([3,3],[0,0]) == [[3,3],[1,2],[0,0]])
console.log(knightMoves([0,0],[7,7]) == [[0,0],[2,1],[4,2],[6,3],[4,4],[6,5],[7,7]])
console.log(knightMoves([0,0],[7,7]) == [[0,0],[2,1],[4,2],[6,3],[7,5],[5,6],[7,7]])
console.table(knightMoves([0,0],[3,3]))
console.table(knightMoves([0,0],[7,7]))
console.table(knightMoves([3,3],[0,0]))