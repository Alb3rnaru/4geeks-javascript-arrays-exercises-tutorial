let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

//your code here

let wokoWiki = function(value) {
    if (value == 0){
        return 'woko';
    } else if (value == 1) {
        return 'wiki';
    }
}

console.log(theBools.map(wokoWiki));