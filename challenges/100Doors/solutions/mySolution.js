var doors = [];

var initialDoorStatus = function(doorArray) {
	for (var index = 1; index <= 100; index++) {
		doors[index] = (index + ": closed");
	}	
	return doors;
};

var everySecondDoor = function(initialDoorStatus) {
	for (var index = 1; index <= 100; index++) {
		if (index % 2 === 0) {
			if ((doors[index]).indexOf("closed")) {
				doors[index] = (index + ": open");
			} else if ((doors[index]).indexOf("open")) {
				doors[index] = (index + ": closed");
			}
		}
	}	
	return doors;
};

var everyThirdDoor = function(everySecondDoor) {
	for (var index = 1; index <= 100; index++) {
		if (index % 3 === 0) {
			if ((doors[index]).indexOf("closed")) {
				doors[index] = (index + ": open");
			} else if ((doors[index]).indexOf("open")) {
				doors[index] = (index + ": closed");
			}
		}
	}
	return doors;
};


var oneHundredDoors = function(doors) {
	var firstState = initialDoorStatus(doors);
	var secondState = everySecondDoor(firstState);
	var thirdState = everyThirdDoor(secondState);
	return doors;
};
