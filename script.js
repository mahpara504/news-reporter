// Geolocation example - Display user's location
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        console.log("Latitude: " + lat + ", Longitude: " + lon);
        // You can integrate this into Google Maps API to display on the map.
    });
} else {
    alert("Geolocation is not supported by this browser.");
}

if(navigator.geolocation){


    navigator.geolocation.getCurrentPosition(function(position){

        
    })

}