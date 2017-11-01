var xhr = new XMLHttpRequest();
xhr.open("get", )

$.getJSON([api_url], function(forecast) {
	console.log(forecast);
});

AIzaSyBZ-_EI53ixIKRgy4Mh2h-aQmFAawTwVPU
https://api.darksky.net/forecast/d0c6a67fc20160d90304109a4bf217fc/37.8267,-122.4233
d0c6a67fc20160d90304109a4bf217fc
$.getJSON('https://api.darksky.net/forecast/[d0c6a67fc20160d90304109a4bf217fc]/[latitude],[longitude]', function(forecast) {});

<script src="https://maps.googleapis.com/maps/api/js?key=[AIzaSyBZ-_EI53ixIKRgy4Mh2h-aQmFAawTwVPU]&libraries=places,geometry"></script>




var weather = new XMLHttpRequest();
weather.open("GET", "https://api.darksky.net/forecast/[d0c6a67fc20160d90304109a4bf217fc]/[latitude],[longitude]");
weather.send(null);

var r = JSON.parse(weather.response);
var dis = "Current location"


https://api.darksky.net/forecast/[d0c6a67fc20160d90304109a4bf217fc]/[latitude],[longitude]





//(function() {
//
//	var API = 'https://www.geocode.farm/v3/json/reverse/?lat=&lon=&country=ua&lang=ua&count=1';
//	function init() {
//		getMedia();
//		getLocation().done(function(data) {
//			var url = API.replace('lat=', 'lat=' + data.latitude)
//			.replace('lon=', 'lon=' + data.longitude)
//			$.ajax({
//				url:url
//			}).done(function(data) {
//				console.log(data);
//			}).fail(function(error) {
//				console.log(error);
//			})
//		});
//	};
//
//
//	function getLocation() {
//		var deferred = $.Deferred();
//		if (navigator.geolocation) {
//			navigator.geolocation.getCurrentPosition(function(data) {
//				console.log(data.coords);
//				deferred.resolve(data.coords);
//			},
//													 function(error) {
//				console.log(error);
//				deferred.reject(error);
//			}
//													);
//		}
//
//		return deferred.promise();
//	};
//
//	init();
//})();