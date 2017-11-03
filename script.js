////var xhr = new XMLHttpRequest();
////xhr.open("get", )
////
////$.getJSON([api_url], function(forecast) {
////	console.log(forecast);
////});
////
////AIzaSyBZ-_EI53ixIKRgy4Mh2h-aQmFAawTwVPU
////https://api.darksky.net/forecast/d0c6a67fc20160d90304109a4bf217fc/37.8267,-122.4233
////d0c6a67fc20160d90304109a4bf217fc
////
////<script src="https://maps.googleapis.com/maps/api/js?key=[AIzaSyBZ-_EI53ixIKRgy4Mh2h-aQmFAawTwVPU]&libraries=places,geometry"></script>
//
//https://maps.googleapis.com/maps/api/geocode/json?latlng=49.839683,24.029716999999998&key=AIzaSyBZ-_EI53ixIKRgy4Mh2h-aQmFAawTwVPU&sensor=true
//
////$.getJSON('https://api.darksky.net/forecast/[d0c6a67fc20160d90304109a4bf217fc]/[latitude],[longitude]', function(forecast) {
////	
////	
////});
//
//$.getJSON([https: api.darksky.net/forecast/[d0c6a67fc20160d90304109a4bf217fc], function(forecast) {
//	console.log(forecast);
//});
//
////
////var weather = new XMLHttpRequest();
////weather.open("GET", "https://api.darksky.net/forecast/[d0c6a67fc20160d90304109a4bf217fc]/[latitude],[longitude]");
////weather.send(null);
////
////var r = JSON.parse(weather.response);
////var dis = "Current location"
////
////
////https://api.darksky.net/forecast/[d0c6a67fc20160d90304109a4bf217fc]/[latitude],[longitude]
////
//
//
//
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
//
//
//
//
//
//
//// 1. Создаём новый объект XMLHttpRequest
//var xhr = new XMLHttpRequest();
//
//// 2. Конфигурируем его: GET-запрос на URL 'phones.json'
//xhr.open('GET', 'phones.json', false);
//
//// 3. Отсылаем запрос
//xhr.send();
//
//// 4. Если код ответа сервера не 200, то это ошибка
//if (xhr.status != 200) {
//	// обработать ошибку
//	alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
//} else {
//	// вывести результат
//	alert( xhr.responseText ); // responseText -- текст ответа.
//}
//


if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(function(position) {
		var lat = position.coords.latitude;
		var long = position.coords.longitude;

		var myRequest=new XMLHttpRequest();
		myRequest.open("get","https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+long+"&key=AIzaSyBZ-_EI53ixIKRgy4Mh2h-aQmFAawTwVPU&sensor=true");
		myRequest.onload=function() {
			var myData=JSON.parse(myRequest.responseText);
			if (myRequest.status == 200) {
				//console.log(myData.results);
				if (myData.results[1]) {
					for (var i=0; i<myData.results[2].address_components.length; i++) {
						for (var b=0;b<myData.results[2].address_components[i].types.length;b++) {
							if (myData.results[2].address_components[i].types[b] == "locality") {
								var city= myData.results[2].address_components[i];
								break;
							}
						}
					}
					$("#showData").html("Погода у моєму місті: "+ city.long_name);
				} else {
					alert("No results found");
				}
			} else {
				console.log("failed!");
			}
		};
		myRequest.send();
	});
}