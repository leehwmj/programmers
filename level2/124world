
function solution(n){
    var num = n.toString()
    var listNum = []
    var newListNum = []

    while(num != []){
        var check = Math.floor((Number(num)/3-0.3)*10)
        var strCheck = check.toString()
        // listNum.splice(0,0,strCheck[strCheck.length-1])
        if (strCheck[strCheck.length-1] == 0){
            newListNum.splice(0,0,"1")
        } else if (strCheck[strCheck.length-1] == 3){
            newListNum.splice(0,0,"2")
        } else if (strCheck[strCheck.length-1] == 7){
            newListNum.splice(0,0,"4")
        }
        num = strCheck.slice(0, strCheck.length-1)
    }

    var answer = newListNum.join("")
    return answer
}


console.log(solution(22))

