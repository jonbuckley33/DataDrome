function codeAddress(address, callback) {	
	var geocoder = new google.maps.Geocoder();
	geocoder.geocode({
		'address' : address
	}, handleAddressCoded);
}

function displayMap(div) {

	var mapOptions = {
		center : new google.maps.LatLng(40.76727216, -73.99392888),
		zoom : 4,
		mapTypeId : google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(div, mapOptions);
	
	return map;
}

function addMarker(map, dp)
{
	var marker = new google.maps.Marker({
		map: map,
		title: dp.stationName,
		position: new google.maps.LatLng(dp.latitude, dp.longitude)		
	});
}

function centerMapOn(map, datum)
{
	console.log("old center: " + map.getCenter());
	map.setCenter(new google.maps.LatLng(40.76727216, -73.99392888));//datum.latitude, datum.longitude));
	console.log("center: " + map.getCenter());
}

function addMarkersForDataDump(map, dump)
{
	console.log(dump);

	centerMapOn(map, dump[0]);
	for (var i=0; i < dump.length; i++)
	{
		addMarker(map, dump[i]);
	}
}
