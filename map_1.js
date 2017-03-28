/*********************************************FUNCION INICIA EL MAPA***********************************/
function initMap() {

  navigator.geolocation.getCurrentPosition(mapa,error);
}
/*********************************************FUNCION SE EJECUTA DE HABER ERRORES EN EL MAPA***********************************/
function error(errorC)
{
    alert('Error: '+errorC.code+' '+error.message+ '\n\Please prove if are connected '+
  'or permit your location');
    
}
/********************FUNCION QUE ACTUALIZA TU DIRECCION ACTUAL*********************************/
function geocodeLatLng(geocoder, position, id) {

  var latlng = position;
  geocoder.geocode({'location': latlng}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      if (results[0]) {
        $('#'+id).html(results[0].formatted_address);
        miubicacion= results[0].formatted_address;
      } else {
        window.alert('No results found');
      }
    } else {
      window.alert('Geocoder failed due to: ' + status);
    }
  });
}
/*********************************************FUNCION QUE CENTRA EL MAPA***********************************/
function mapa(position)
{
  var geocoder = new google.maps.Geocoder;
  var container= document.getElementById('map');
  var latitud= position.coords.latitude;
  var longitud= position.coords.longitude;  
  var mapita = new google.maps.LatLng(latitud,longitud);
  var centerZoom={center: mapita,zoom: 16,mapTypeControl:false,};
  var map = new google.maps.Map(container,centerZoom);

  /***********************DIBUJA MARCADORES EN EL MAPA*********************/
  var currentMarker = new google.maps.Marker({
    position: new google.maps.LatLng(latitud,longitud),
    map: map,
    title:"¡ Aqui estoy !",
    icon: "img/persona.png"
      });
  var marker1 = new google.maps.Marker({
      position: new google.maps.LatLng(latitud+0.001, longitud),
      map: map,
      title:"auto1",
      icon: "img/car.png"
    });
  var marker2 = new google.maps.Marker({
      position: new google.maps.LatLng(latitud+0.004, longitud),
      map: map,
      title:"auto2",
      icon: "img/car.png"
    });
  var marker3 = new google.maps.Marker({
      position: new google.maps.LatLng(latitud, longitud+0.004),
      map: map,
      title:"auto3",
      icon: "img/car.png"
    });

  geocodeLatLng(geocoder, currentMarker.position,'dirActual');
};
/**************************************************FIN*****************************************/