//let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];
let list_of_numbers = [ 23,34,65,23,45,87,45,89,34,2,5,8 ]
// your code here
function mergeTwoList(numberList){
    let odd = [];
    let even = [];
    for (let number of list_of_numbers){
        if (number%2 != 0){
            odd.push(number);
        } else {
            even.push(number);
        }
    }
    return [].concat(odd, even);
}

console.log(mergeTwoList(list_of_numbers));
