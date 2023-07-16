const array = [1,2,3,4,5,6,7]
console.log(reverse(array))
function reverse(array){
    //using special function
    // return array.reverse()
    
    // without using special funciton
    let stack = []
    let top = 0
    array.forEach((item)=>{
        stack.push(item)
        top = stack.length -1
    })
    stack.forEach((item, index)=>{
        array[index] = stack[top];
        top--
    })
    return array
}