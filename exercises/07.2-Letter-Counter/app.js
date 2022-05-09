let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here
for (let letter of par){
    letter = letter.toLowerCase();
    if ( letter == ' '){
        continue;
    }
    else if (counts[letter] == null){
        counts[letter] = 1;
    } else {
        counts[letter] = counts[letter] + 1;
    }
}

console.log(counts);