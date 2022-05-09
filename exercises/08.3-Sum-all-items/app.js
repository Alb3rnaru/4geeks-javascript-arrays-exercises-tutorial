function sumTheElements(theArray){
	
	var total = 0;
	
	//your code here
	for (let item of theArray) {
		total = total + item;
	}
	return total;
}

let arr = [2,13,34,5];
//console.log(sumTheElements(arr));