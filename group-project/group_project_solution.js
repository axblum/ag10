// Person 2 - Pseudocode

// The user wants to input a list of numbers (that can be any length) into the following
// functions.


// Function 1
// Pseudocode
// Function Sum that takes in an Array as a param.
// Set a var as sum equal to zero
// FOR in array
// add value to sum
// Return sum



// function Sum(array) {
// 	var sum = 0;
// 	for (var i = 0; i < array.length; i++) {
// 		sum = sum + array[i];
// 	}
// 	return sum;
// }

// Re-factored solution

function sum(array) {
	var sum = 0;
	array.forEach(function(num) {
		sum += num;
	});
	return sum;
}

// Function 2
// Create Function called mean which takes in an array
// call the sum function on the array
// store that as sum
// divide the sum / array.length
// return mean

function mean(array) {
	var mean = sum(array) / array.length;
	return mean;
}

// Function 3
// Create function median which takes in an array
// if the array has an odd number of elements
// 		Get the middle element
// 		Return middle element
// else
// 		call the median method with the two middle elements as an array
// 		Return  median

// function median(array) {
// 	if (array.length % 2 === 1) {
// 		var i = Math.floor(array.length / 2);
// 		return array[i];
// 	}
// 	else {
// 		var i = array.length / 2;
// 		return (array[i-1] + array[i]) / 2;
// 	}
// }

// Re-factored solution

function median(array) {
	var i = Math.floor(array.length / 2);
	return array.length % 2 === 1 ? array[i] : (array[i-1] + array[i]) / 2;
}


// Every test passed.