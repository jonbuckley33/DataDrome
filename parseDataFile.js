function DataDump() {
	//should contain array of Data objects
	var dataPoints = new Array();
}

function DataPoint() {
	//should contain variables for location, data value, etc.
	var id, stationName, availableDocks, totalDocks, latitude, longitude, statusValue, statusKey, availableBikes, stAddress1, stAddress2, city, postalCode, location, altitude, testStation, lastCommunicationTime, landMark;
}


function populateDump(evt) {
	var textOfFile = evt.target.result;
	textOfFile = textOfFile.replace(/'/g, "&apos;")

	//takes the JSON string and converts it to object form.
	var jsonObject = JSON.parse(textOfFile);

	var dataDump = new Array();
	
	for (var i = 0; i < jsonObject.stationBeanList.length; i++) {
		var tempDataPoint = new DataPoint();
		
		tempDataPoint.id = jsonObject.stationBeanList[i].id;
		tempDataPoint.stationName = jsonObject.stationBeanList[i].stationName;
		tempDataPoint.availableDocks = jsonObject.stationBeanList[i].availableDocks;
		tempDataPoint.totalDocks = jsonObject.stationBeanList[i].totalDocks;
		tempDataPoint.latitude = jsonObject.stationBeanList[i].latitude;
		tempDataPoint.longitude = jsonObject.stationBeanList[i].longitude;
		tempDataPoint.statusValue = jsonObject.stationBeanList[i].statusValue;
		tempDataPoint.statusKey = jsonObject.stationBeanList[i].statusKey;
		tempDataPoint.availableBikes = jsonObject.stationBeanList[i].availableBikes;
		tempDataPoint.stAddress1 = jsonObject.stationBeanList[i].stAddress1;
		tempDataPoint.stAddress2 = jsonObject.stationBeanList[i].stAddress2;
		tempDataPoint.city = jsonObject.stationBeanList[i].city;
		tempDataPoint.postalCode = jsonObject.stationBeanList[i].postalCode;
		tempDataPoint.location = jsonObject.stationBeanList[i].location;
		tempDataPoint.altitude = jsonObject.stationBeanList[i].altitude;
		tempDataPoint.testStation = jsonObject.stationBeanList[i].testStation;
		tempDataPoint.lastCommunicationTime = jsonObject.stationBeanList[i].lastCommunicationTime;
		tempDataPoint.landMark = jsonObject.stationBeanList[i].landMark;

		dataDump[i] = tempDataPoint;
	}
	return dataDump;
}

function parse(file, callback) {
	var fileReader = new FileReader();
	fileReader.onloadend = callback;

	//reads the text of the file
	fileReader.readAsText(file);
}

