const array = [23,235,52,6,6,423,4,6,77,33,5,43,2,4123,57,8,7,2]
console.log(maxMinInArray(array))
function maxMinInArray(array){
    let max_elem = array[0]
    let min_elem = array[0];

    for(let i=0;i<array.length;i++){
        if(min_elem > array[i]) min_elem = array[i]
        if(max_elem < array[i]) max_elem = array[i]
    }
    
    return {max_elem, min_elem }
}