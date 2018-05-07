function range(start, end) {
	var myArray = [];
	for (i = start; i <= end; i++) {
		myArray.push(i);
		}
	return myArray;
}



function sum(arr) {
	var total = 0;
	arr.forEach(function(zebra) {
			total = total + zebra;
		})

	return total;
}

console.log(sum(range(1, 10)));
