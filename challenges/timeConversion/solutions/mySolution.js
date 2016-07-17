// By Awilda

var changeFormat = function(usTime) {
	if (usTime.indexOf('AM') !== -1) {
  	return usTime.replace("AM", "");
  } else {
  	var splitTime = usTime.replace("PM", "").split(":");
    var newNum = parseInt(splitTime[0]) + 12;
    
    if (newNum === 24) {
    	splitTime[0] = "00";
    } else {
    	splitTime[0] = newNum;
    }
    
  	return splitTime.join(":");
  }
};