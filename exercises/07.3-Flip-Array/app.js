var arr = [45,67,87,23,5,32,60];

//Your code here.
let invertedArr = [];
for (let i = arr.length - 1; i >= 0; i-- ){
    invertedArr.push(arr[i]);
}

console.log(invertedArr);