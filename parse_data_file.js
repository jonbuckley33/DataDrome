class DataDump
{
	//should contain array of Data objects
	var dataPoints = new Array();
}

class DataPoint
{
	//should contain variables for location, data value, etc.
	var id, stationName, availableDocks, totalDocks, latitude, longitude, 
		statusValue, statusKey, availableBikes, stAddress1, stAddress2, city, 
		postalCode, location, altitude, testStation, lastCommunicationTime, landMark;
}

function parse(file)
{
	//should take a File as a parameter and return a DataDump object
	
	//takes the JSON string and converts it to object form.
	var jsonObject = JSON.parse(file);
	var tempDataPoint = new DataPoint();
	var dataDump = new DataDump();
	var index = 0;
	for (var list in jsonObject)
	{
		for (var i = 0; i < jsonObject.list.length; i++)
		{
			tempDataPoint.id 					= jsonObject.list[i].id;
			tempDataPoint.stationName 			= jsonObject.list[i].stationName;
			tempDataPoint.availableDocks 		= jsonObject.list[i].availableDocks;
			tempDataPoint.totalDocks 			= jsonObject.list[i].totalDocks;
			tempDataPoint.latitude 				= jsonObject.list[i].latitude;
			tempDataPoint.longitude 			= jsonObject.list[i].longitude;
			tempDataPoint.statusValue 			= jsonObject.list[i].statusValue;
			tempDataPoint.statusKey 			= jsonObject.list[i].statusKey;
			tempDataPoint.availableBikes 		= jsonObject.list[i].availableBikes;
			tempDataPoint.stAddress1 			= jsonObject.list[i].stAddress1;
			tempDataPoint.stAddress2 			= jsonObject.list[i].stAddress2;
			tempDataPoint.city 					= jsonObject.list[i].city;
			tempDataPoint.postalCode 			= jsonObject.list[i].postalCode;
			tempDataPoint.location 				= jsonObject.list[i].location;
			tempDataPoint.altitude 				= jsonObject.list[i].altitude;
			tempDataPoint.testStation 			= jsonObject.list[i].testStation;
			tempDataPoint.lastCommunicationTime = jsonObject.list[i].lastCommunicationTime;
			tempDataPoint.landMark 				= jsonObject.list[i].landMark;
			
			dataDump[index] = tempDataPoint;
			index++;
		}
	}
}
