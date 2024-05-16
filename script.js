const map = L.map('map').setView([-27.5969, -48.5495],16);
const layer =  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });
layer.addTo(map);
var popup = L.popup();

const form = document.querySelector('form'); 
form.addEventListener('submit', function(event) { 
  event.preventDefault(); 
});

function buscaMapa() {
    var latlng = document.getElementById("pesquisa")
    var latlngArr = latlng.value.split(" ")
    var lat = latlngArr[0];
    var lng = latlngArr[1];
    map.setView([lat, lng], 16);
    marker.setLatLng([lat, lng]);
}

var contador = 0;
function onMapClick(e) {
    if(contador>0) map.removeLayer(marker), contador = 0;
    contador ++;
    marker = new L.Marker(e.latlng, {draggable:true});
    map.addLayer(marker);
    marker.bindPopup("Você selecionou esta posição " + e.latlng.toString()).openPopup();
}


map.on('click',  onMapClick);