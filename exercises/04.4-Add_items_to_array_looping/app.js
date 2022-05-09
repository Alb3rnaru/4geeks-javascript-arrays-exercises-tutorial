var arr = [4,5,734,43,45];

//*****************
// Your code here
// you need to loop 10 times, for example, using a for loop
//*****************

for (i=0; i<10; i++){
    arr.push(Math.floor(Math.random()*10000000));
}

console.log(arr);