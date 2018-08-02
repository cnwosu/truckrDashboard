/* ------------------------------------------------------------------------------
*
*  # Basic markers
*
*  Specific JS code additions for maps_google_markers.html page
*
*  Version: 1.0
*  Latest update: Aug 1, 2015
*
* ---------------------------------------------------------------------------- */

$(function() {

	// Setup map
	function initialize() {

		// Set coordinates
		var myLatlng = new google.maps.LatLng(5.644701,-0.151094);

		// Options
		var mapOptions = {
			zoom: 10,
			center: myLatlng
		};

		// Apply options
		var map = new google.maps.Map($('.map-marker-simple')[0], mapOptions);
		var contentString = 'Accra';

		// Add info window
		var infowindow = new google.maps.InfoWindow({
			content: contentString
		});

		// Add marker
		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			title: 'Hello World!'
		});

		// Attach click event
		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map,marker);
		});

	};

	// Initialize map on window load
	google.maps.event.addDomListener(window, 'load', initialize);

});
