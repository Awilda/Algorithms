var fibArr = [0, 1];


var fib = function(arr) {
	for (var ind = 0; ind < 10; ind++) {
		var lastTwo = arr[arr.length-1] + arr[arr.length-2];
		fibArr.push(lastTwo);
	}	
	return fibArr;
};

var fibSum = function(fibSequence) {
	var sum = 0;
	for (var ind = 0; ind < fibSequence.length; ind++) {
		sum += fibSequence[ind];
	}
	return sum;
};

var fibonacci = fib(fibArr);
// console.log(fibSum(fibonacci));




// Sum using reduce

// var fibSum = fibonacci.reduce(function(previousValue, currentValue){
// 	return previousValue + currentValue;	
// });




// Recursive Sum

// var fib = function(arr) {
// 	for (var ind = 0; ind < 10; ind++) {
// 		var lastTwo = arr[arr.length-1] + arr[arr.length-2];
// 		fibArr.push(lastTwo);
// 	}	
// 	return fibArr;
// };

// var recurSum = function(fib) {
// 	if (fib.length === 0) {
// 		return 0;
// 	}
// 	return fib.shift() + recurSum(fib);
// };

// console.log(recurSum(fibonacci));
