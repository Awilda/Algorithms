// Awilda's Solution

// input: String
// output: Boolean

// step 1: define all characters
// step 2: iterate over string
// step 3: replace all elements that match the defined characters to ""
// step 4: if string is empty, return true
// step 5: if string is not empty, return false


var isProperlyBalanced = function(str) {
	
	for (var i = 0; i < str.length; i++) {
		str = str.replace(/\(\)/g,"");
		str = str.replace(/\{\}/g,"");
		str = str.replace(/\[\]/g,"");
	}
	
	if (str === "") {
		return true;
	} else {
		return false;
	}
};

isProperlyBalanced("[()]{}{[()()]()}"); // true
isProperlyBalanced("[(])"); // false