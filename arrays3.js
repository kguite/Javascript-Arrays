//8kyu Find numbers which are divisible by given number

// first we need to create a new array or separate out the values within the original array
// then use a for loop to iterate over the arrays and return a string
// then use if statement to add the conditional logic, if the number is divisible by the divisor
// then push new array 
function divisibleBy(numbers, divisor) {
	  var newArr = [];
	  for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] % divisor === 0) {
		  newArr.push(numbers[i]);
		} 
	  }
	return newArr;
	}
	
	
	