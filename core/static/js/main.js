require(['jQuery', 'boostrap', 'leaflet'], function($){

    var map;

    function addMarker(e){
        // Add marker to map at click location; add popup window
        var newMarker = new L.marker(e.latlng).addTo(map);
    }
    function addPopup(e){
        // Add marker to map at click location; add popup window
        var ok = $('<button type="button" class="btn btn-sm">Markierung setzen</button>');
        var popup = L.popup()
            .setLatLng(e.latlng)
            .setContent($('<p>', { html: ok })[0])
            .openOn(map);

        ok.click(function() {
            console.log(e.latlng)
        });
    }

	$( document ).ready(function() {
		map = L.map('travelmap').setView([51.0257, 13.7983], 10);
		var stamen1 = L.tileLayer('http://{s}.tile.stamen.com/terrain/{z}/{x}/{y}.png', {attribution: "Karte: <a href='http://maps.stamen.com/#toner/12/37.7706/-122.3782'>Stamen Design</a>"}).addTo(map),
            osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: "Karte: <a href='http://www.openstreetmap.org/'>&copy; OpenStreetMap </a>contributers"});

		var baseLayers = {"Terrain": stamen1, "OpenStreetMap":osm};
		lcontrol = L.control.layers(baseLayers).addTo(map);

        // map.on('click', addMarker);
        map.on('click', addPopup);
	});

	console.log('main.js loaded');
});