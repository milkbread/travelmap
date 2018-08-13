require(['jQuery', 'boostrap', 'leaflet'], function($){

	$( document ).ready(function() {
		var mymap = L.map('travelmap').setView([51.0257, 13.7983], 10);
			stamen1 = L.tileLayer('http://{s}.tile.stamen.com/terrain/{z}/{x}/{y}.png', {attribution: "Karte: <a href='http://maps.stamen.com/#toner/12/37.7706/-122.3782'>Stamen Design</a>"}).addTo(mymap),
            osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: "Karte: <a href='http://www.openstreetmap.org/'>&copy; OpenStreetMap </a>contributers"});

		var baseLayers = {"Terrain": stamen1, "OpenStreetMap":osm};
		lcontrol = L.control.layers(baseLayers).addTo(mymap);
	});

	console.log('main.js loaded');
});