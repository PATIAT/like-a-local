function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: { lat: 51.5074, lng: -0.1272 },
    });

    // Create an array of alphabetical characters used to label the markers.
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // Locations of the most visited places
    const locations = [
        { lat: 51.5007, lng: -0.1246 }, // Big Ben
        { lat: 51.5014, lng: -0.1419 }, // Buckingham Palace
        { lat: 51.5138, lng: -0.0984 }, // St Paul's Cathedral
        { lat: 51.5033, lng: -0.1196 }, // London Eye
        { lat: 51.5081, lng: -0.0759 }, // Tower of London
        { lat: 51.5034, lng: -0.1276 }, // 10 Downing Street
        { lat: 51.4995, lng: -0.1248 }, // Houses of Parliament
        { lat: 51.4994, lng: -0.1273 }, // Westminster Abbey
        { lat: 51.5018, lng: -0.1405 }, // Victoria Memorial
        { lat: 51.5228, lng: -0.1547 }, // Madame Tussauds
        { lat: 51.5074, lng: -0.0993 }, // Tate Modern
        { lat: 51.4964, lng: -0.176 }, // Natural History Museum
        { lat: 51.4992, lng: -0.1629 }, // Harrods
        { lat: 51.5387, lng: -0.0164 }, // London Stadium / Olympic Park
        { lat: 51.556, lng: -0.2796 }, // Wembley Stadium
        { lat: 51.4786, lng: -0.2947 }, // Royal Botanical Gardens
        { lat: 51.5028, lng: -0.0029 }, // Millenium Dome
        { lat: 51.5045, lng: -0.0865 }, // The Shard
        { lat: 51.5056, lng: -0.0752 }, // Tower Bridge
        { lat: 51.5065, lng: -0.0812 }, // HMS Belfast
    ];

    // Add some markers to the map.
    const markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length],
        });
    });

    // Add a marker clusterer to manage the markers.
    const markerCluster = new markerClusterer.MarkerClusterer({ map, markers });
}