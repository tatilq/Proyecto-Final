
var ciudades = '[{"nombre": "arica","distance":"2059"},{"nombre": "iquique","distance":"1789"},{"nombre": "antofagasta","distance":"1368"},'+
				'{"nombre": "copiapo","distance":"1567"},{"nombre": "La serena","distance":"470"},{"nombre": "Valparaiso","distance":"116"},'+
				'{"nombre": "rancagua","distance":"84"},{"nombre": "talca","distance":"257"},{"nombre": "santiago","distance":"0"},'+
				'{"nombre": "coyhaique","distance":"1888"},{"nombre": "Punta Arenas","distance":"848"},{"nombre": "concepcion","distance":"500"},'+
				'{"nombre": "temuco","distance":"690"},{"nombre": "valdivia","distance":"848"},{"nombre": "Puerto Montt","distance":"1032"}]';

/**********************************FUNCION QUE SE EJECUTA CUANDO TERMINE DE CARGAR EL DOCUMENTO***********/
$(document).ready(init);
//--------------------------------------FUNCION QUE LLAMA A ASIGNA EVENTO-----------------------------------//
function init()
{	
	$('#btn-select').click(validarCiudades);
	$('#btn-enviar').click(validarEnviar);
	
	$('#info').hide();
 	var origenList = $('#origen');
 	var destinoList = $('#destino');
    var ciudad = $.parseJSON(ciudades);
   $.each(ciudad, function() 
   {
      	var html= '<option class=".origenes" value='+ this['distance']+'>'+this['nombre']+'</option>';
    	origenList.append(html);
   });
   $.each(ciudad, function() 
   {
      	var html= '<option class=".destinos" value='+ this['distance']+'>'+this['nombre']+'</option>';
		destinoList.append(html);	
   });

  $('#origen').on('change',onClickOrigen);
  $('#destino').on('change',onClickDestino);	
}

/*******************FUNCION QUE GUARDA DATOS LOCALEMNTE CON UN CLICK*******************/
function onClickOrigen()
{
	var kmOrigen= $(this).val();
	localStorage.setItem('kmOrigen',kmOrigen);
}
/*******************FUNCION QUE GUARDA DATOS LOCALEMNTE CON UN CLICK*******************/
function onClickDestino()
{
	var kmDestino= $(this).val();
	localStorage.setItem('kmDestino',kmDestino);
}
/***************************FUNCION QUE VALIDA QUE SELCCIONES UN CARRO Y UN DESTINO*******************/
function validarCiudades()
{

    //Se verifica si la opcion del select esta vacia
    if ($('#origen').val() != '' && $('#destino').val() != '') 
    {
    	swal({
	    title: "¡Se selecciono exitosamente!",
	    imageUrl: "src/img/goods.png"
		});
       $('#info').show();
    } 
    else {
    	 swal({
	    title: "¡Debes de seleccionar una ciudad!",
	    imageUrl: "src/img/bads.png"
		});
    }

}
 
function validarEnviar()
 {
 	var kmLitros=localStorage.getItem('consumo');
 	var kmDestino=localStorage.getItem('kmDestino');
 	var kmOrigen=localStorage.getItem('kmOrigen');
 	var pasajero=localStorage.getItem('pasajero');
 	var ruta=localStorage.getItem('ruta');
 
 	var costo=(-1*((((kmDestino-kmOrigen)*kmLitros))/pasajero));  	 
	swal({
    title: "¡El costo es ! "+costo,
    imageUrl: ruta
	});
 
 }


var cars = '[{"nombre": "Auto","max":"5", "consumo":"12", "image":"src/img/auto.jpg"},'+
	'{"nombre": "Moto","max":"2", "consumo":"21", "image":"src/img/moto.jpg"},'+
	'{"nombre": "Mini Van","max":"8", "consumo":"7", "image":"src/img/van.jpg"},'+
	'{"nombre": "Camión","max":"3", "consumo":"6", "image":"src/img/camion.jpg"}]';

/**********************************FUNCION QUE SE EJECUTA CUANDO TERMINE DE CARGAR EL DOCUMENTO***********/
$(document).ready(init);
//--------------------------------------FUNCION QUE LLAMA A ASIGNA EVENTO-----------------------------------//
function init()
{	
 	var carList = $('#list_carros');
    var carros = $.parseJSON(cars);
   $.each(carros, function() 
   {
      	var html= '<li class="lis"><input type="radio" name="gender" class="radio" value="male" checked>'+
      		'<img src='+this['image']+' class="vehiculo" ><small>'+this['nombre']+'</small><span> Maximo </span><span class="pasajero">'+this['max']+'</span> '+
      		'<span class="litros" style="display:none;">'+this['consumo']+'</span></li>';

    carList.append(html);
  	
  });
		$('.lis').on('click',onLinkClick);

}
/*******************FUNCION QUE GUARDA DATOS LOCALEMNTE CON UN CLICK*******************/
function onLinkClick()
{
	var consumo= $(this).find('.litros').text();
	var ruta= $(this).find('.vehiculo').attr('src');
	var pasajero=$(this).find('.pasajero').text();
	localStorage.setItem('consumo',consumo);
	localStorage.setItem('pasajero',pasajero);
	localStorage.setItem('ruta',ruta);

	if ($('#origen').val() != '' && $('#destino').val() != '') 
    {
    	swal({
	    title: "¡Se selecciono exitosamente!",
	    imageUrl: "src/img/goods.png"
		});
       $('#info').show();
    } 
}

   
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

  geocodeLatLng(geocoder, currentMarker.position,'dirActual');
};
/**************************************************FIN*****************************************/
$('#tooltip').hide();
$("#exclama").mouseover(function(){
    		$('#tooltip').show();
  	});
 
	$("#exclama").mouseout(function(){
    		a$('#tooltip').hide();
 });