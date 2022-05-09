// Code goes here
function matrixBuilder(factor){
    var matrix = [];
    for (let i=0; i<factor; i++){
        matrix[i] = [];
        for (let j=0; j<factor; j++){
            numeroRandom = Math.round(Math.random()*1);
            matrix[i][j] = numeroRandom;
        }
    }
    return matrix;
}


/*var matrix = [];
for(var i=0; i<9; i++) {
    matrix[i] = [];
    for(var j=0; j<9; j++) {
        matrix[i][j] = Math.round(Math.random()*1);
    }
}*/
//Math.round(Math.random()*1)
//console.log(matrix);
// do not change anything from this line down
console.log(matrixBuilder(5))