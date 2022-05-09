var arr = [4,5,734,43,45];

// Your code here, use the push function and the random function.

function randomNumber(){
    return Math.floor(Math.random()*1000);
}

arr.push(randomNumber());
arr.push(randomNumber());
console.log(arr);
