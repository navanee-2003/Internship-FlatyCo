
var map = L.map('map', {
  zoomControl: false // Hide the default zoom control
}).setView([51.505, -0.09], 13);

// Add a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map);

// Optionally, you can create a custom zoom control
L.control.zoom({
  position: 'none' // Set the position of the custom zoom control
}).addTo(map);


