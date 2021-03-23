function balancedTree(ary, h){
    let nodes_cnt = (Math.pow(ary, h + 1) - 1) / (ary - 1)
    // console.log(nodes_cnt)
    let q = []
    let edge_list = []
    q.push(0)
    let head = 0
    let k = 0
    for(let i = 0; i < (Math.pow(ary, h) - 1) / (ary - 1); i++){
        curr = q[head++]
        for(let j = 0; j < ary; j++){
            edge_list.push([curr, ++k])
            q.push(k)
        }
    }
    return [nodes_cnt, edge_list]
}