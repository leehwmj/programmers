function change124(n) {
    return n === 0 ? '' : change124(parseInt((n - 1) / 3)) + [1, 2, 4][(n - 1) % 3];
}

console.log(change124(222))

//주의. 숫자가 커지면 메모리를 너무 많이 차지 할 수 있음.